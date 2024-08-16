import { createSourceFile, ScriptTarget, isExportAssignment, isTypeAliasDeclaration, Node, forEachChild, isObjectLiteralExpression, TypeLiteralNode, isInterfaceDeclaration, TypeNode, TypeElement, isPropertySignature, isIdentifier, ObjectLiteralElementLike, isPropertyAssignment, createProgram, ObjectLiteralExpression } from "typescript"
import { readFileSync, existsSync, readdirSync, statSync } from "fs"
import { resolve, basename, join } from "path"
import { Rule } from "eslint"

export default {
	meta: {
		type: "problem",
		docs: {
			description: "Enforce StreamPad Control schema for Component, Template, and API Documentation",
			category: "Best Practices",
			recommended: true
		}
	},
	create: (context: Rule.RuleContext): Rule.RuleListener => {
		const srcPath = resolve("./src/controls")
		const controlTypesPath = resolve("./src/types/Control.ts")

		// Verify that required files exist
		const validateFilesExist = (controlName: string, controlPath: string) => {
			const requiredFiles = [
				`${controlName}.tsx`,
				`${controlName}.template.tsx`,
				`${controlName}.meta.ts`,
			]

			requiredFiles.forEach((file) => {
				const filePath = resolve(`${controlPath}/${file}`)

				if (!existsSync(filePath)) {
					context.report({
						node: context.sourceCode.ast,
						message: `Missing required file: ${filePath} in ${controlPath}`,
					})
				}
			})

			const storiesFile = `${controlName}.stories.ts`
			const storiesFilePath = resolve(`${controlPath}/${storiesFile}`)
			if (!existsSync(storiesFilePath)) {
				context.report({
					node: context.sourceCode.ast,
					message: `Missing stories file in ${controlPath}. Run: yarn storybook:generate ${controlName}`,
				})
			}
		}

		// Verify that the main component file has a default export and is exporting its Props type
		const validateComponentFile = (componentPath: string) => {
			const source = readFileSync(componentPath, "utf8")

			const sourceFile = createSourceFile(
				componentPath,
				source,
				ScriptTarget.Latest,
				true
			)

			let hasDefaultExport = false
			let hasPropsExport = false

			const visit = (node: Node) => {
				if (hasDefaultExport && hasPropsExport) {
					return
				}

				if (isExportAssignment(node) && node.isExportEquals === false) {
					hasDefaultExport = true
				}

				if (isTypeAliasDeclaration(node) && node.name.text === "Props") {
					hasPropsExport = true
				}

				forEachChild(node, visit)
			}
			visit(sourceFile)

			if (!hasDefaultExport) {
				context.report({
					node: context.sourceCode.ast,
					message: `Main file ${basename(componentPath)} must have a default export of a React component.`,
				})
			}

			if (!hasPropsExport) {
				context.report({
					node: context.sourceCode.ast,
					message: `Main file ${basename(componentPath)} must export a 'Props' type.`,
				})
			}
		}

		// Verify that the template file has a default export and has no props
		const validateTemplateFile = (templatePath: string) => {
			const source = readFileSync(templatePath, "utf8")
			const sourceFile = createSourceFile(
				templatePath,
				source,
				ScriptTarget.Latest,
				true
			)

			let hasDefaultExport = false
			let hasPropsExport = false

			const visit = (node: Node) => {
				// no recursion stop guard because we're checking for lack of Props type export

				if (isExportAssignment(node) && node.isExportEquals === false) {
					hasDefaultExport = true
				}

				if (isTypeAliasDeclaration(node) && node.name.text === "Props") {
					hasPropsExport = true
				}

				forEachChild(node, visit)
			}
			visit(sourceFile)

			if (!hasDefaultExport) {
				context.report({
					node: context.sourceCode.ast,
					message: `Template file ${basename(templatePath)} must have a default export of a React component.`,
				})
			}

			if (hasPropsExport) {
				context.report({
					node: context.sourceCode.ast,
					message: `Template file ${basename(templatePath)} must not export a 'Props' type.`,
				})
			}
		}

		// 1. Verify that the meta file has a default export of Meta type
		const validateMetaFile = (metaPath: string) => {
			const source = readFileSync(metaPath, "utf8")
			const sourceFile = createSourceFile(
				metaPath,
				source,
				ScriptTarget.Latest,
				true
			)

			const controlTypeSource = readFileSync(controlTypesPath, "utf8")
			const controlTypesFile = createSourceFile(
				controlTypesPath,
				controlTypeSource,
				ScriptTarget.Latest,
				true
			)

			let hasDefaultExport = false
			let exportedMeta: ObjectLiteralExpression

			const visit = (node: Node) => {
				// Parse the meta file and check for default export
				if (isExportAssignment(node) && node.isExportEquals === false) {
					hasDefaultExport = true

					// Check if exported value is an object literal
					if (isObjectLiteralExpression(node.expression)) {
						exportedMeta = node.expression
					}
				}

				forEachChild(node, visit)
			}
			visit(sourceFile)

			if (!hasDefaultExport) {
				context.report({
					node: context.sourceCode.ast,
					message: `Meta file ${basename(metaPath)} must have a default export of an object literal.`,
				})

				return
			}

			if (!exportedMeta) {
				context.report({
					node: context.sourceCode.ast,
					message: `Meta file ${basename(metaPath)} must have a default export of an object literal with a Meta type.`,
				})

				return
			}

			// 2. Verify that the meta file is fulfilling the Meta type
			let metaType: TypeLiteralNode | undefined
			const findMetaType = (node: Node) => {
				if (isInterfaceDeclaration(node) && node.name.text === "Meta") {
					metaType = node.members as unknown as TypeLiteralNode
				}

				forEachChild(node, findMetaType)
			}
			findMetaType(controlTypesFile)

			if (!metaType) {
				context.report({
					node: context.sourceCode.ast,
					message: `Meta file ${basename(metaPath)} must export a Meta type.`,
				})

				return
			}

			// 3. Validate fields against the Meta type
			const metaFields = new Map<string, TypeNode>()
			metaType.members.forEach((member: TypeElement) => {
				if (isPropertySignature(member) && isIdentifier(member.name)) {
					const memberName = member.name.text

					metaFields.set(memberName, member.type!)
				}
			})

			const exportedFields = new Map<string, Node>()
			exportedMeta.properties.forEach((property: ObjectLiteralElementLike) => {
				if (isPropertyAssignment(property) && isIdentifier(property.name)) {
					const propName = property.name.text

					exportedFields.set(propName, property.initializer)
				}
			})

			// 4. Report missing
			metaFields.forEach((expectedTypeNode: TypeNode, fieldName: string) => {
				const node = exportedFields.get(fieldName)

				if (!node) {
					context.report({
						node: context.sourceCode.ast,
						message: `Meta field ${fieldName} is missing in ${basename(metaPath)}.`,
					})

					return
				}

				// Validate field type
				const typeChecker = createProgram([metaPath, controlTypesPath], {})
					.getTypeChecker()

				const actualType = typeChecker.getTypeAtLocation(node)
				const expectedType = typeChecker.getTypeFromTypeNode(expectedTypeNode)
				if (!typeChecker.isTypeAssignableTo(actualType, expectedType)) {
					context.report({
						node: context.sourceCode.ast,
						message: `Field '${fieldName}' in the Meta object is of incorrect type. Expected: '${expectedType.getSymbol()!.getName()}', but got: '${actualType.getSymbol()?.getName()}'.`,
					})
				}
			})

			// 5. Report extra fields
			exportedFields.forEach((_, fieldName: string) => {
				if (!metaFields.has(fieldName)) {
					context.report({
						node: context.sourceCode.ast,
						message: `Unexpected field '${fieldName}' found in the exported Meta object.`,
					})
				}
			})
		}

		return {
			Program: () => {
				const controlsDir = readdirSync(srcPath).filter((file) =>
					statSync(join(srcPath, file)).isDirectory()
				)

				controlsDir.forEach((controlDir) => {
					const controlPath = join(srcPath, controlDir)
					const controlName = basename(controlDir)

					validateFilesExist(controlName, controlPath)

					const componentPath = join(srcPath, `${controlName}.tsx`)
					if (existsSync(componentPath)) {
						validateComponentFile(componentPath)
					}

					const templatePath = join(srcPath, `${controlName}.template.tsx`)
					if (existsSync(templatePath)) {
						validateTemplateFile(templatePath)
					}

					const metaPath = join(srcPath, `${controlName}.meta.ts`)
					if (existsSync(metaPath)) {
						validateMetaFile(metaPath)
					}
				})
			}
		}
	}
} as Rule.RuleModule

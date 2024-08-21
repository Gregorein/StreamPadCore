import { createSourceFile, ScriptTarget, isExportAssignment, isTypeAliasDeclaration, Node, forEachChild, isObjectLiteralExpression, TypeLiteralNode, isInterfaceDeclaration, TypeNode, TypeElement, isPropertySignature, isIdentifier, ObjectLiteralElementLike, isPropertyAssignment, createProgram, ObjectLiteralExpression, isVariableDeclaration, isVariableStatement, SyntaxKind } from "typescript"
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
				`${controlName}.test.tsx`
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

			const storiesFile = `${controlName}.stories.tsx`
			const storiesFilePath = resolve(`${controlPath}/${storiesFile}`)
			if (!existsSync(storiesFilePath)) {
				context.report({
					node: context.sourceCode.ast,
					message: `Missing stories file in ${controlPath}.`
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

				if (isExportAssignment(node)) {
					hasDefaultExport = true
				}

				if (
					(
						isTypeAliasDeclaration(node) ||
						isInterfaceDeclaration(node)
					) && node.name.text === "Props"
				) {
					hasPropsExport = true
				}

				forEachChild(node, visit)
			}
			visit(sourceFile)

			if (!hasDefaultExport) {
				context.report({
					loc: {
						start: { line: 1, column: 0 },
						end: { line: 1, column: 1 }
					},
					message: `Main file ${basename(componentPath)} must have a default export of a React component.`,
				})
			}

			if (!hasPropsExport) {
				context.report({
					loc: {
						start: { line: 1, column: 0 },
						end: { line: 1, column: 1 }
					},
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

				if (isExportAssignment(node)) {
					hasDefaultExport = true
				}

				if (
					(
						isTypeAliasDeclaration(node) ||
						isInterfaceDeclaration(node)
					) && node.name.text === "Props"
				) {
					hasPropsExport = true
				}

				forEachChild(node, visit)
			}
			visit(sourceFile)

			if (!hasDefaultExport) {
				context.report({
					loc: {
						start: { line: 1, column: 0 },
						end: { line: 1, column: 1 }
					},
					message: `Template file ${basename(templatePath)} must have a default export of a React component.`,
				})
			}

			if (hasPropsExport) {
				context.report({
					loc: {
						start: { line: 1, column: 0 },
						end: { line: 1, column: 1 }
					},
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

			let hasDefaultExport = false
			let exportedMeta: ObjectLiteralExpression | null = null

			const sourceCode = context.sourceCode  // Get the source code in ESTree format

			// Traverse the TypeScript AST to find the default export and the meta object
			const visitNode = (node: Node) => {
				if (isVariableStatement(node)) {
					node.declarationList.declarations.forEach((declaration) => {
						if (
							isIdentifier(declaration.name) &&
							declaration.name.text === "meta" &&
							isObjectLiteralExpression(declaration.initializer)
						) {
							exportedMeta = declaration.initializer
						}
					})
				}

				if (isExportAssignment(node) && isIdentifier(node.expression) && node.expression.text === "meta") {
					hasDefaultExport = true
				}

				forEachChild(node, visitNode)
			}

			visitNode(sourceFile)

			// Report if no default export was found
			if (!hasDefaultExport) {
				context.report({
					loc: {
						start: { line: 1, column: 0 },
						end: { line: 1, column: 1 }
					},
					message: `Meta file ${basename(metaPath)} must have a default export of an object literal with a Meta type`,
				})
				return
			}

			// Report if the default export is not a valid meta object
			if (!exportedMeta) {
				context.report({
					loc: {
						start: { line: 1, column: 0 },
						end: { line: 1, column: 1 }
					},
					message: `Meta file ${basename(metaPath)} does not export a valid Meta object`,
				})
				return
			}

			// Further checks on exportedMeta for specific fields...
			const requiredFields = [
				{ key: "name", type: "string" },
				{ key: "description", type: "string" },
				{ key: "version", type: "string" },
				{ key: "author", type: "string" },
				{ key: "license", type: "string" },
				{ key: "api", type: "array" },
				{ key: "category", type: "string" },
				{ key: "tags", type: "array" },
			]

			exportedMeta.properties.forEach((property: ObjectLiteralElementLike) => {
				if (isPropertyAssignment(property) && isIdentifier(property.name)) {
					const propName = property.name.escapedText.toString()

					const requiredField = requiredFields.find((field) => field.key === propName)
					if (requiredField) {
						const initializer = property.initializer

						// Check type matching
						switch (requiredField.type) {
							case "string":
								if (!initializer || initializer.kind !== SyntaxKind.StringLiteral) {
									const estreeNode = sourceCode.getNodeByRangeIndex(property.name.getStart())
									context.report({
										node: estreeNode,  // Report the corresponding ESTree node
										message: `Field '${propName}' must be of type 'string' in ${basename(metaPath)}`,
									})
								}
								break
							case "array":
								if (!initializer || initializer.kind !== SyntaxKind.ArrayLiteralExpression) {
									const estreeNode = sourceCode.getNodeByRangeIndex(property.name.getStart())
									context.report({
										node: estreeNode,  // Report the corresponding ESTree node
										message: `Field '${propName}' must be an array in ${basename(metaPath)}`,
									})
								}
								break
							// add more specific checks here for other types, like 'number', etc.
						}
					}
				}
			})

			// Check for missing fields
			requiredFields.forEach((field) => {
				const hasField = exportedMeta!.properties.some((property) => {
					return isPropertyAssignment(property) && isIdentifier(property.name) && property.name.escapedText === field.key
				})

				if (!hasField) {
					const estreeNode = sourceCode.getNodeByRangeIndex(exportedMeta!.getStart())
					context.report({
						node: estreeNode,  // Report the corresponding ESTree node
						message: `Meta object is missing required field '${field.key}' in ${basename(metaPath)}`,
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

					const componentPath = join(srcPath, controlName, `${controlName}.tsx`)
					if (existsSync(componentPath)) {
						validateComponentFile(componentPath)
					}

					const templatePath = join(srcPath, controlName, `${controlName}.template.tsx`)
					if (existsSync(templatePath)) {
						validateTemplateFile(templatePath)
					}

					const metaPath = join(srcPath, controlName, `${controlName}.meta.ts`)
					if (existsSync(metaPath)) {
						validateMetaFile(metaPath)
					}
				})
			}
		}
	}
} as Rule.RuleModule

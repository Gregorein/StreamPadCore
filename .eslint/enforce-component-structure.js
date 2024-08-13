import ts from 'typescript'
import fs from 'fs'
import path from 'path'

export default {
	meta: {
		type: "problem",
		docs: {
			description: "Ensure React components follow the dynamic ComponentExports interface",
			category: "Best Practices",
			recommended: false
		},
		schema: []
	},
	create(context) {
		const componentFilePath = path.resolve('./src/types/Component.ts')
		const componentStructure = parseComponentDefinition(componentFilePath)

		if (!componentStructure) {
			context.report({
				message: "Failed to parse the ComponentExports definition."
			})
			return {}
		}

		return {
			ExportNamedDeclaration(node) {
				const declaration = node.declaration
				if (declaration.type === 'VariableDeclaration' && declaration.declarations) {
					declaration.declarations.forEach(decl => {
						if (decl.id.name === 'ComponentExports') {
							validateComponentStructure(decl.init, componentStructure, context)
						}
					})
				}
			}
		}
	}
}

const parseComponentDefinition = (filePath) => {
  let source
  try {
      source = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
      console.error("Error reading the file:", error)
      return null
  }

  const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true)
  let componentStructure = findComponentStructure(sourceFile)

  if (!componentStructure) {
      console.error("ComponentExports interface not found.")
  }

  return componentStructure
}

const findComponentStructure = (node) => {
  let componentStructure = null

  const visit = (node) => {
      if (ts.isInterfaceDeclaration(node) && node.name.text === 'ComponentExports') {
          componentStructure = {
              name: node.name.text,
              members: node.members.map(member => ({
                  name: member.name.text,
                  type: member.type.getText()
              }))
          }
      }
      ts.forEachChild(node, visit)
  }

  visit(node)

  return componentStructure
}

const validateComponentStructure = (node, componentStructure, context) => {
  if (!node || !componentStructure) {
      context.report({
          node,
          message: "Invalid component structure or missing component structure definition."
      })
      return
  }

  // Extract the properties of the component export being validated
  const exportedProperties = node.properties.map(prop => ({
      name: prop.key.name,
      type: prop.value.type
  }))

  // Validate each property against the expected structure
  componentStructure.members.forEach(expectedMember => {
      const matchingProp = exportedProperties.find(prop => prop.name === expectedMember.name)

      if (!matchingProp) {
          context.report({
              node,
              message: `Missing property '${expectedMember.name}' in component export.`
          })
      } else if (matchingProp.type !== expectedMember.type) {
          context.report({
              node,
              message: `Property '${expectedMember.name}' should be of type '${expectedMember.type}', but got '${matchingProp.type}'.`
          })
      }
  })

  // Check for any extra properties that are not defined in ComponentExports
  exportedProperties.forEach(prop => {
      if (!componentStructure.members.find(member => member.name === prop.name)) {
          context.report({
              node,
              message: `Unexpected property '${prop.name}' found in component export.`
          })
      }
  })
}

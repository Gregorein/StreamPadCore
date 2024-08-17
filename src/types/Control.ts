type ValueType = "string" | "number" | "object" | "boolean"
type Value = string | number | object | boolean

type Category = "buttons" | "knobs" | "toggles" | "indicators" | "sliders"

/**
 * Tag represents a categorization for different types of components.
 * 
 * - `action`: Components that emit actions (e.g., buttons, forms).
 * - `display`: Components that display data (e.g., text, images).
 * - `basic`: Simple components with minimal functionality.
 * - `advanced`: Components with complicated APIs or behavior.
 */
type Tag =
	| "action"
	| "display"
	| "basic"
	| "advanced"

interface APIFunctionArg {
	name: string
	description: string
	type: ValueType
	defaultValue: Value
	required: boolean
}

export interface APIEntry {
	apiType: "function" | "value"
	name: string
	description: string
	required: boolean
}

export interface APIFunction extends APIEntry {
	apiType: "function"
	args?: APIFunctionArg[]
	returnType: ValueType | "void"
}

export interface APIValue extends APIEntry {
	apiType: "value"
	type: ValueType
	defaultValue: Value
}

export interface Meta {
	name: string
	description: string
	version: string
	author: string
	license: string

	api: (APIValue | APIFunction)[]

	category: Category
	tags: Tag[]
}

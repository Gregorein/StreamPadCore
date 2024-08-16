
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
	value: Value
	required: boolean
}

export interface APIEntry {
	type: "function" | "value"
	name: string
	description: string
	required: boolean
}

export interface APIFunction extends APIEntry {
	type: "function"
	args?: APIFunctionArg[]
	return: Value | "void"
}

export interface APIValue extends APIEntry {
	type: "value"
	value: Value
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

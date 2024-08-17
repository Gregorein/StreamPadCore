import { Meta } from "types/Control";

const meta: Meta = {
	name: "Button",
	description: "A simple button component",
	version: "0.0.0",
	author: "Gregorein",
	license: "MIT",
	api: [
		{
			apiType: "function",
			name: "onClick",
			required: true,
			description: "Handles button click",
			returnType: "void",
		}
	],
	category: "buttons",
	tags: ["action"],
}

export default meta

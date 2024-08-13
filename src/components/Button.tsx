import { ReactNode, MouseEvent } from "react"
import type { ComponentExports } from "types/Component"

const Component: ReactNode = <button>Click Me</button>

const Template: ReactNode = <div>Button (Template)</div>

export default {
	Component: Component,
	Template: Template,
	description: "A simple button component",
	version: "1.0.0",
	author: "Gregorein",
	license: "MIT",
	api: {
		onClick: (_: MouseEvent): void => { }, // eslint-disable-line @typescript-eslint/no-unused-vars
	},
	docs: {
		onClick: {
			description: "Handles button click",
			params: {
				event: "MouseEvent",
			},
			returns: "void",
		},
	},
	context: {
		category: "buttons",
		tags: ["action", "basic"],
	},
} as ComponentExports

import { ReactNode, MouseEvent } from "react"
import type { ComponentExports } from "types/Component"

export type ButtonProps = {
	onClick: (event: MouseEvent) => void
}

const Button = ({ onClick }: ButtonProps): ReactNode => <button onClick={onClick}>Click Me</button>

const Template = (): ReactNode => <div>Button (Template)</div>

export default {
	Component: Button,
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

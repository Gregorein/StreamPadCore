import { ReactNode } from 'react'

type Props = any // eslint-disable-line @typescript-eslint/no-explicit-any

export interface ComponentExports {
	Component: (props: Props) => ReactNode
	Template: (props: Props) => ReactNode
	description: string
	version: string
	author: string
	license: string

	api: {
		[key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
	}
	docs: {
		[key: string]: {
			description: string
			params: {
				[key: string]: string
			},
			returns: string
		}
	}

	context: {
		category: "buttons" | "knobs" | "toggles" | "indicators" | "sliders"
		tags: (
			"action" | // all components that emit action
			"display" | // all components that display data
			"basic" | // all simple componments
			"complex" // all components that have multiple APIs
		)[]
	}
}
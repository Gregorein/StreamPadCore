import metadata from "./Button.meta"
import Component from "./Button"
import Template from "./Button.template"
import { Meta, StoryObj } from "@storybook/react"

export default {
	tags: ["autodocs"],
	component: Component,
	subcomponents: {
		Template
	},
	parameters: {
		metadata,
		docs: {
			description: {
				component: metadata.description,
			},
		},
	}
} satisfies Meta<typeof Component>

export const Story: StoryObj<typeof Component> = {}

export const TemplateStory: StoryObj<typeof Template> = {
	render: () => <Template />
}

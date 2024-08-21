import metadata from "./Button.meta"
import Component, { Props } from "./Button"
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
} satisfies Meta<Props>

export const Story: StoryObj<Props> = {}

export const TemplateStory: StoryObj<typeof Template> = {
	render: () => <Template />
}

import { Canvas, useOf } from "@storybook/blocks"
import { assertedMetaOf } from "./types"

const Template = () => {
	const { csfFile } = useOf("meta") as assertedMetaOf
	const Stories = csfFile.moduleExports

	return (
		<>
			<h3>Template</h3>
			<Canvas of={Stories.TemplateStory} sourceState="none" />
		</>
	)
}

export default Template

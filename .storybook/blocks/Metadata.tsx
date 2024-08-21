import { useOf } from "@storybook/blocks"
import { assertedStoryOf } from "./types"

import { Meta } from "../../src/types/Control"

const Metadata = () => {
	const { story } = useOf("story") as assertedStoryOf
	const metadata: Meta = story.parameters!.metadata

	return (
		<>
			<h2><code style={{ padding: "0 8px", background: "#0b6bcb", borderRadius: 4 }}>{metadata.name}</code> metadata</h2>
			<p>
				<b>category:</b> {metadata.category}<br />
				<b>tags:</b> {metadata.tags.join(", ")}<br />
				<b>version:</b> {metadata.version}<br />
				<b>author:</b> {metadata.author}<br />
				<b>license:</b> {metadata.license}<br />
			</p>
		</>
	)
}

export default Metadata

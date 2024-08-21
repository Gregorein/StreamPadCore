import { StoryObj } from '@storybook/react';
import { Of } from "@storybook/blocks";
import { CSFFile, PreparedMeta } from 'storybook/internal/types';

export interface OfProps {
	of: Of
}

export interface assertedStoryOf {
	type: "story"
	story: StoryObj
}

export interface assertedMetaOf {
	type: "meta"
	csfFile: CSFFile
	preparedMeta: PreparedMeta
}

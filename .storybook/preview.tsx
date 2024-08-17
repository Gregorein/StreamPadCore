import type { Preview } from "@storybook/react"
import theme from "./theme"

import template from "./template.mdx"

import "@fontsource/roboto/100.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/900.css"
import "@fontsource/roboto/100-italic.css"
import "@fontsource/roboto/300-italic.css"
import "@fontsource/roboto/400-italic.css"
import "@fontsource/roboto/500-italic.css"
import "@fontsource/roboto/700-italic.css"
import "@fontsource/roboto/900-italic.css"

import '@fontsource-variable/fira-code'

// TODO: https://storybook.js.org/docs/writing-stories/decorators#global-decorators -> add global decorators for Component and Template stories, adding StreamPad Control Tile and List containers

// TODO: https://storybook.js.org/docs/configure/user-interface/theming#mdx-component-overrides -> style MDX components

const preview: Preview = {
  parameters: {
    controls: {
      disableSave: true
    },
    layout: "centered",
    docs: {
      theme,
      page: template
    }
  },
  tags: ["autodocs", "!dev"],
}

export default preview

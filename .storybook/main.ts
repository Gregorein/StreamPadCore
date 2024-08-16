import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true
  }
}

export default config

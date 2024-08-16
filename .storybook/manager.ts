import { addons } from '@storybook/manager-api'
import { Addon_Config } from 'storybook/internal/types'

import theme from './theme'

addons.setConfig({
	theme,
	navSize: 200,
	showToolbar: false,
	enableShortcuts: false,
	selectedPanel: undefined
} as Addon_Config)

import { create } from '@storybook/theming/create'

export default create({
	base: 'dark',

	// typography
	fontBase: '"Roboto", sans-serif',
	fontCode: '"Fira Code Variable", monospace',

	// branding
	brandTitle: 'StreampadCore',
	brandUrl: 'https://streampad.website',
	brandImage: 'https://raw.githubusercontent.com/Gregorein/StreamPadCore/master/public/logo.png',
	brandTarget: '_self',

	// theme
	colorPrimary: '#0b6bcb',
	colorSecondary: '#0b6bcb',

	// Text colors
	textColor: '#f0f4f8',
	textInverseColor: '#0b6bcb',

	// UI
	appBg: '#0b0d0e',
	appContentBg: '#0b0d0e',
	appPreviewBg: '#181a1c',
	appBorderColor: '#32383e',
	appBorderRadius: 6,

	// Toolbar default and active colors
	barTextColor: '#97c3f0',
	barSelectedColor: '#12467b',
	barHoverColor: '#0a2744',
	barBg: '#0b0d0e',

	// Form colors
	inputBg: '#0b0d0e',
	inputBorder: '#12467b',
	inputTextColor: '#c7dff7',
	inputBorderRadius: 6,
})

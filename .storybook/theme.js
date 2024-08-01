import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

	// typography
	fontBase: '"Noto Sans", sans-serif',
	fontCode: 'monospace',

	// branding
  brandTitle: 'StreampadCore',
  brandUrl: 'https://streampad.website',
  brandImage: '.storybook/logo.png',
  brandTarget: '_self',

	// // theme
	// colorPrimary: '#3A10E5',
	// colorSecondary: '#585C6D',
	
	// // Text colors
	// textColor: '#ffffff',
	// textInverseColor: '#10162F',

	// UI
	appBg: '#000000',
	appContentBg: '#111111',
	appPreviewBg: '#222222',
	// appBorderColor: '#585C6D',
	appBorderRadius: 16,
	
	// // Toolbar default and active colors
	// barTextColor: '#9E9E9E',
	// barSelectedColor: '#585C6D',
	// barHoverColor: '#585C6D',
	// barBg: '#ffffff',
	
	// // Form colors
	// inputBg: '#ffffff',
	// inputBorder: '#10162F',
	// inputTextColor: '#10162F',
	// inputBorderRadius: 2,
});
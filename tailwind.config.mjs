/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'max-md': { 'max': '767px' },
			sm: { 'min': '480px' },
			md: { 'min': '768px', },
			lg: { 'min': '1024px' },
			xl: { 'min': '1440px' },
		},
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/src/assets/assetBG.jpg')",
			},
			colors: {
				"primary": '#094C5D',
				"secondary": '#212934',
				"line1": '#F6901E',
				"line2": '#E1E7EC',
				"foots": '#F8F9FA',
				"foots2": '#6E7A8A',
				"icons": '#0BB1CB',
				"title2": '#149FC4',
			},
			height: {
				'7.5': "30px",
				'15': "60px",
				'17': "68px",
				'100': "420px",
				'55': "220px",
				'62.5': "250px",
			},
			width: {
				'7.5': "30px",
				'62.5': "250px",
			},
			spacing: {
				'2.5': "10px",
			}
		},
	},
	plugins: [],
}

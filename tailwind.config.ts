import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   'src/pages/**/*.tsx', 'src/components/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      color:{
        'primary': '#777'
      }
    },
  },
  plugins: [],
}
export default config

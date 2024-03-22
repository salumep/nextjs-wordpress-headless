import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        tiny: '.675rem',
        xs: '.775rem',
        sm: '.875rem',
        base: '1rem',
        xl: '1.25rem',
        '4xl': '2.5rem',
        '2xl': '1.5rem',
      },
      colors: {
        'gray-500': '#EEEEEE',
        'gray-600': '#C8C8C8',
        'gray-700': '#A2A2A2',
        'gray-900': '#565656',
        'gray-50': '#B8B8B8',
        'color-bg': '#f3f4f5',
        'color-text-200': '#7A7A7A',
        'color-text-100': '#A3A3A3',
        'color-text-300': '#525252',
        primary: '#6E1366',
        'primary-50': '#F2EDF2',
        secondary: '#F4D314',
        'primary-500': '#6E1366',
        'secondary-500': '#F8E15F',
      },
    },
  },
  plugins: [],
};
export default config;

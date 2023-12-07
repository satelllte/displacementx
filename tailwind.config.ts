import type {Config} from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      pink: colors.pink[700],
      sky: colors.sky[700],
    },
  },
  plugins: [],
} satisfies Config;

export default config;

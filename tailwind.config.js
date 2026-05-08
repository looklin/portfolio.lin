/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#f4c430',
        'brand-bg': '#f6f6f6',
        'brand-tab-inactive': '#e6e6e6',
        'brand-tab-active': '#d9d9d9',
        'brand-tab-border': '#cccccc',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'sans-serif'], // For numbers and tab titles
        sans: ['"Inter"', 'sans-serif'], // For small top nav
        script: ['"Caveat"', 'serif'], // For the logo
      },
      animation: {
        breathe: 'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
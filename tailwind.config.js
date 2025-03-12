/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  variants: {
    extend: {
      opacity: ['disabled'], // 👈 Add variant
    }
  },
  theme: {
    extend: {
      colors: {
        'luxe-gold': '#C5A47E',
        'carbon-black': '#0A0A0A',
        'ivory': '#FDF9F5'
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        serif: ['Zina', 'serif']
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'spin-slow': 'spin 3s linear infinite' // 👈 Custom animation
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px' // 👈 Add custom breakpoints here
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ]
}
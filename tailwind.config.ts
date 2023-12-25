/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1px',
        sm: '1px',
        lg: '1px',
        xl: '1px',
        '2xl': '1px',
      },
    },
    extend: {
      colors: {
        primary: '#EEF2E2',
        secondary:'#043F2E',
        bgcolor:'#acc474',
        
      },
      borderWidth: {
        '0': '0',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        headers:['Inter', ...defaultTheme.fontFamily.sans],
        font:['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            p: {
              fontFamily: theme('fontFamily.body'),
              color: '#000',
            },
            h1: {
              fontFamily: theme('fontFamily.headers'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary'),
            },
            h2: {
              fontFamily: theme('fontFamily.headers'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary'),
            },
            h3: {
              fontFamily: theme('fontFamily.headers'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary'),
            },
            h4: {
              fontFamily: theme('fontFamily.headers'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary'),
            },
            body: {
              fontFamily: theme('fontFamily.body'),
              fontWeight: theme('fontWeight.normal'),
              color: theme('colors.primary'),
            },
            'button': {
              fontFamily: theme('fontFamily.body'),
              fontWeight: theme('fontWeight.medium'),
              color: theme('colors.primary'),
            },
            'caption, small': {
              fontFamily: theme('fontFamily.body'),
              fontWeight: theme('fontWeight.light'),
              color: theme('colors.primary'),
            },
            
          },
        },
      }),
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'light': 200,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      maxHeight: {
        '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.2rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      
    },
  },
  variants: {
    extend: {
      borderWidth: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
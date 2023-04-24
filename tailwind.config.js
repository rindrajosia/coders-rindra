/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
        'white': '#ffffff',
        'primary': {
          200: '#EFEFFC',
          300: '#CFD0F6',
          400: '#7F81E8',
          DEFAULT: '#5F62E2',
          600: '#5658CB',
        },
      'secondary': {
         200: '#EAF8F4',
         300: '#BFE9DE',
         400: '#56C4A7',
         DEFAULT: '#2AB691',
         600: '#26A482',
      },
      'gray': {
         400: '#F2F2F2',
         500: '#E5E5E5',
         600: '#B2B2B2',
         700: '#808080',
         800: '#333333',
         DEFAULT: '#1D1D1D',
      },
    },
    fontSize: {
      '8xl': [
        '120px', {//font-size
          lineHeight: '120px',
          letterSpacing: '-6px',
          fontWeight: '500',
        }
      ],
      '7xl': [
        '72px', {//font-size
          lineHeight: '80px',
          letterSpacing: '-4.5px',
          fontWeight: '600',
        }
      ],
      '6xl': [
        '55px', {//font-size
          lineHeight: '60px',
          letterSpacing: '-2.5px',
          fontWeight: '500',
        }
      ],
      '5xl': [
        '48px', {//font-size
          lineHeight: '54px',
          letterSpacing: '-1.6px',
          fontWeight: '500',
        }
      ],
      '4xl': [
        '36px', {//font-size
          lineHeight: '44px',
          letterSpacing: '-1.2px',
          fontWeight: '500',
        }
      ],
      '3xl': [
        '28px', {//font-size
          lineHeight: '34px',
          letterSpacing: '-0.8px',
          fontWeight: '500',
        }
      ],
      '2xl': [
        '24px', {//font-size
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }
      ],
      'xl': [
        '24px', {//font-size
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }
      ],
      'lg': [
        '21px', {//font-size
          lineHeight: '30px',
          letterSpacing: '-0.8px',
          fontWeight: '400',
        }
      ],
      'base': [
        '17px', {//font-size
          lineHeight: '25px',
          letterSpacing: '-0.7px',
          fontWeight: '400',
        }
      ],
      'sm': [
        '15px', {//font-size
          lineHeight: '23px',
          letterSpacing: '-0.6px',
          fontWeight: '400',
        }
      ],
      'caption1': [
        '20px', {//font-size
          lineHeight: '24px',
          letterSpacing: '-0.6px',
          fontWeight: '400',
        }
      ],
      'caption2': [
        '18px', {//font-size
          lineHeight: '20px',
          letterSpacing: '-0.3px',
          fontWeight: '400',
        }
      ],
      'caption3': [
        '16px', {//font-size
          lineHeight: '18px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        }
      ],
      'caption4': [
        '13px', {//font-size
          lineHeight: '15px',
          letterSpacing: '-0.2px',
          fontWeight: '400',
        }
      ],
    },
    borderRadius: {
      DEFAULT: '10px',
      full: '9999px',
    },
    extend: {},
  },
  plugins: [],
}

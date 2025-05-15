/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#ecf6ff',
          100: '#dceefd',
          200: '#bfe0fc',
          300: '#90cefb',
          400: '#5ab4f8',
          500: '#3399f3',
          600: '#1a7be9',
          700: '#1564d3',
          800: '#0a3d62', // Deep blue (primary)
          900: '#183654',
          950: '#0f1e2e',
        },
        teal: {
          50: '#effef7',
          100: '#dafeef',
          200: '#b8f8e0',
          300: '#81eec9',
          400: '#43deae',
          500: '#06BCC1', // Turquoise (secondary)
          600: '#0e9c90',
          700: '#107c74',
          800: '#13625d',
          900: '#13514d',
          950: '#052f2e',
        },
        coral: {
          500: '#FF7F50', // Coral accent
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      animation: {
        'ripple': 'ripple 3s linear infinite',
        'wave': 'wave 8s linear infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2.4)', opacity: 0 },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(0.8)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};
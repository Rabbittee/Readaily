module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#DADADA',
          dark: '#505050',
          primary: '#323232',
        },
      },
      letterSpacing: {
        title: '.2em',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.4s ease-out',
    },
  },
  plugins: [],
};

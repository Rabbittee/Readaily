module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#DADADA',
          dark: '#505050',
          light: '#F8F8F8',
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
      boxShadow: {
        top: '0px -5px 15px 0px rgba(0, 0, 0, .1)',
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.4s ease-out',
    },
  },
  plugins: [],
};

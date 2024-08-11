module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#2a2a2a',
          700: '#333333',
          600: '#444444',
          900: '#1f1f1f',
        },
        blue: {
          600: '#4d45b5',
          400: '#bb86fc',
        },
        red: {
          600: '#e57373',
        },
      },
    },
  },
  plugins: [],
};

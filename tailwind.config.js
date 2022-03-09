module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      '3xl': '0px 8px 24px rgba(132, 147, 173, 0.6)',
    },
    animation: {
      'spin-slow': 'spin 200s linear infinite',
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '5rem',
    },
    colors: {
      green: '#12c1b8',
      'green-oval': 'rgba(0,224,202,0.15)',
      'light-green': '#00e0ca',
      divider: '#8493AD',
      grey: '#c2cfe4',
      'light-grey': '#f5f8fc',
      black: '#131f37',
      text: '#485775',
      white: '#fdfdfd',
      'hero-text': 'rgba(217,225,239,1)',
      nav: 'rgba(72, 87, 118, 0.2)',
    },
    extend: {},
  },
  plugins: [],
}

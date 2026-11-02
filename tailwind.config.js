export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0e0c',
        paper: '#eff0e9',
        lime: '#d2f98a',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0a1a',
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#a855f7',
        'cyber-pink': '#ec4899'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        shimmer: 'shimmer 3s ease-in-out infinite'
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}

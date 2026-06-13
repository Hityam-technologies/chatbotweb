/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(15px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 40px rgba(56, 189, 248, 0.04)',
        'glass-card-hover': '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 50px rgba(56, 189, 248, 0.08)',
        'dashboard-card': '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 50px rgba(56, 189, 248, 0.05)',
        'input-inset': 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
        'input-focus': 'inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 20px rgba(56, 189, 248, 0.12)',
      },
    },
  },
  plugins: [],
}


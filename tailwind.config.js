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
        audiowide: ['Audiowide', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-robot-left': 'slideRobotLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scan-line': 'scanLine 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'type-cursor': 'typeCursor 0.8s step-end infinite',
        'grid-fade': 'gridFade 3s ease-out forwards',
        'boot-fade-out': 'bootFadeOut 0.8s ease-out forwards',
        'panel-reveal': 'panelReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(15px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(60px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRobotLeft: {
          'from': { transform: 'translateX(15%) scale(1.05)' },
          'to': { transform: 'translateX(-8%) scale(0.92)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 20px rgba(96, 224, 204, 0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(96, 224, 204, 0.5)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        typeCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gridFade: {
          '0%': { opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { opacity: '0.3' },
        },
        bootFadeOut: {
          'from': { opacity: '1' },
          'to': { opacity: '0', pointerEvents: 'none' },
        },
        panelReveal: {
          'from': { opacity: '0', transform: 'translateX(80px) scale(0.96)' },
          'to': { opacity: '1', transform: 'translateX(0) scale(1)' },
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


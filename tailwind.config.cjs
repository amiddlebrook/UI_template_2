/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './*.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'] },
      colors: {
        app: {
          bg: '#0c101b', surface: '#151c2a', border: '#293449',
          primary: '#8c92ff', secondary: '#a78bfa', success: '#34d399',
          danger: '#fb7185', warning: '#fbbf24', text: '#f2f6ff', muted: '#9aa9c4',
        },
      },
      boxShadow: { glow: '0 0 48px rgba(140,146,255,.12)' },
      animation: { 'pulse-slow': 'pulse 8s ease-in-out infinite', float: 'float 6s ease-in-out infinite' },
      keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } } },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0F172A',
        cyan: '#06B6D4',
        purple: '#8B5CF6',
        emerald: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'ring-pulse': 'ring-pulse 1.6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'ring-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.35), 0 0 14px rgba(139, 92, 246, 0.25)',
          },
          '50%': {
            boxShadow: '0 0 0 2px rgba(6, 182, 212, 0.55), 0 0 26px rgba(139, 92, 246, 0.5)',
          },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.45)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.45)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.45)',
        'glow-cyan-lg': '0 0 45px rgba(6, 182, 212, 0.55)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

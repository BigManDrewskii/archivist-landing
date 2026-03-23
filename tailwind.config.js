/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: '#0f0f10',
        card: '#141416',
        surface: '#1a1a1d',
        hover: '#1e1e21',
        'border-col': '#242428',
        'text-primary': '#e8e8ea',
        'text-muted': '#6b6b72',
        'text-dim': '#4a4a52',
        accent: '#6366f1',
        'accent-bg': '#1e1e3f',
        cta: '#5558e8',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
}


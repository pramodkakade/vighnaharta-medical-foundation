import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-deep': '#1E3A5F',
        'blue-mid': '#2D6A9F',
        'blue-light': '#EBF4FF',
        'green-earth': '#2D6A4F',
        'green-mid': '#40916C',
        'green-light': '#D8F3DC',
        'amber-warm': '#F4A261',
        'cream': '#F8F4EE',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 2px 16px rgba(30,58,95,0.08)',
        'card-hover': '0 8px 32px rgba(30,58,95,0.16)',
      },
    },
  },
  plugins: [],
}
export default config

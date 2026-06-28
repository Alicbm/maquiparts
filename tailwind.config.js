/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mq-black':  '#0D0D0D',
        'mq-dark':   '#141414',
        'mq-steel':  '#1E1E1E',
        'mq-plate':  '#2A2A2A',
        'mq-iron':   '#3A3A3A',
        'mq-gray': {
          DEFAULT: '#888888',
          light:   '#BBBBBB',
          muted:   '#5A5A5A',
        },
        'mq-yellow': {
          DEFAULT: '#FFC300',
          dark:    '#E6A800',
          light:   '#FFD45E',
          soft:    '#231A00',
        },
        'mq-white':  '#F5F5F0',
        'mq-red':    '#CC2200',
        'mq-green':  '#25D366',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      backgroundImage: {
        ttuPattern: "url('./assets/icons/bg-shorten-desktop.svg')",
        ttuPattern2: "url('./assets/icons/bg-boost-desktop.svg')",
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
    colors: {
      // Primary colors
      'primary-cyan': 'hsl(180, 66%, 49%)',
      'primary-dark-violet': 'hsl(257, 27%, 26%)',
      // Secondary colors
      'secondary-red': ' hsl(0, 87%, 67%)',
      // Neutal Colors
      'gray-neutral': 'hsl(0, 0%, 75%)',
      'graynish-violet': 'hsl(257, 7%, 63%)',
      'very-dark-blue': 'hsl(255, 11%, 22%)',
      'very-dark-violet': 'hsl(260, 8%, 14%)',
      White: 'hsl(0, 0%, 100%)',
      'gray--001': '#f8f9fa',
      'gray--002': '#f1f3f5',
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'primary': '#3498db',
        'secondary': '#2ecc71',
        'accent': '#e74c3c',
        'background': '#F9FAFB',
        'white': '#ffffff',
        'text': '#151D48',
        'lupa': '#5D5FEF',

        'success-light': '#d3fcd2',
        'success': '#22c55e',

        'grey-light': '#eceff1',
        'rose-light': '#FFE2E5',
        'grey-bg': '#f4f6f8',
        'orange-dark': '#f57c00',
        'blue-dark': '#1976d2',
        'pink': '#fa5a7d',
        'orange': '#ffab00',
        'yellow-light': '#ffd666',
        'pink-light': '#ffe2e5',
        'yellow-bg': '#fff5cc',
        'white-bg': '#ffffff',
        'red-dark': '#ff5630',
        'grey-dark': '#212b36',

        'blue': '#2500ff',
        'dark-grey': '#373d3f',

        '--text-grey': '#637381',
        'black-transparent': 'rgba(0, 0, 0, 0%)',
        'grey-opacity': 'rgba(145, 158, 171, 8%)',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'blue-700': '#051D3B',
      'blue-600': '#5081FB',
      'blue-500': '#7BA4FC',
      'blue-400': '#96B9FD',
       bgInput: 'rgba(255, 255, 255, 0.16)',
       bgInputHover: 'rgba(255, 255, 255, 0.24)',
      'white': '#fff',
      navMenuIcon: 'rgba(80, 129, 251, 0.16)',
      navMenuIconHover: 'rgba(80, 129, 251, 0.64)',
      bgButton: 'rgba(80, 129, 251, 0.08)',
      bgEditor: 'rgba(20, 20, 20, 1)',
      bgMenuMobile: 'rgba(45, 65, 91, 1)',
      bgCardContent: 'rgba(0, 0, 0, 0.16)'
    },
  },
  plugins: [],
}


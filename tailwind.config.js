/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;',
      },

      width:{
        '5/1' : '5%',
        '30/1' : '30%',
        '10/1' : '10%',
        '20/1' : '20%',
      },
      height:{
        '5/1' : '5%',
        '30/1' : '30%',
        '10/1' : '10%',
        '20/1' : '20%',
      },
      margin:{
        '5/1' : '5%',
        '30/1' : '30%',
        '10/1' : '10%',
        '20/1' : '20%',
      },
      padding:{
        '2px' : '2px'
      },
    },
  },
  plugins: [],
}


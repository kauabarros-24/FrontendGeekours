/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: [
  './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;',
        '4xl' : 'rgba(17, 17, 26, 0.05) 0px 8px 32px, rgba(17, 17, 26, 0.05) 0px 16px 32px;',
      },
      height:{
        '5/1' : '5%',
        '10/1' : '10%',
        '20/1' : '20%',
        '30/1' : '30%',
        '40/1' : '40%',
        '50/1' : '50%',
        '60/1' : '60%',
        '70/1' : '70%',
        '80/1' : '80%',
        '90/1' : '90%',
      },
      width:{
        '5/1' : '5%',
        '10/1' : '10%',
        '20/1' : '20%',
        '30/1' : '30%',
        '40/1' : '40%',
        '50/1' : '50%',
        '60/1' : '60%',
        '70/1' : '70%',
        '80/1' : '80%',
        '90/1' : '90%',
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


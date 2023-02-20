/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.html'],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
      'minmd' :'767px',
      'lg': {'max': '1023px'},
      'lgmin': '1023px',
      'xl': {'max': '1279px'},
      '2xl': '1535px',
      '3xl': '1920px',
    },
    spacing:{
      '50%': '50%',
    },
    extend: {
      fontSize: {
        'h1': '120px',
        'h2': '90px',
        'h3': '64px',
        'h4': '42px',
        'h5': '16px',
        'h6': '24px',
        '32': '32px',
        'sm': '12px',
        'm' : '14px',
      },
      padding: {
        '10': '10px',
        '15': '15px',
        '20':'20px',
        '22.5': '22.5px',
        '30' : '30px',
        '50' : '50px',
        '75' : '75px',
        '100' : '100px,',
        '182' : '182px',
        '50%' : '50%',
      },
      margin: {
        '8' : '8px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '50': '50px',
      },
      
      colors:{
        'black':'#000000',
        'dark':'#171717',
        'main':'#FF304D',
        'active-red':'#DC2D45',
        'light-red':'#FF445E',
        'grey':'#323232',
        'dark-grey':'#474747',
        'middle-grey':'#919191',
        'light-grey':'#E0E0E0',
        'light':'#F8F8F8',
        'white':'#FFFFFF',
        'prototype':'#457292',
      }
    },
  },
  plugins: [],
}

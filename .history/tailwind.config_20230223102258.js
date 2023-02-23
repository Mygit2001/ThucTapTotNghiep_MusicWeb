/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080',
        'transparent' : 'rgba(0,0,0,0.3)',
        'transparent-05' : 'rgba(0,0,0,0.5)'
      },
      colors: {
        'main-100': '#E7ECEC',
        'main-200': '#DDE4E4',
        'main-300': '#CED9D9',
        'main-400': '#C0D8D8',
        'main-500': '#0E8080'
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': ' translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        }
        ,
        'rotate-song': {
          '0%': {
            '-webkit-transform': ' rotate(0);',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        },
        'scale-thumb' : {
          '0%': {
            '-webkit-transform': ' scale(1) rotateZ(0);',
            transform: ' scale(1) rotateZ(0);'
          },
          '50%': {
            '-webkit-transform': ' scale(0.5) rotateZ(180);',
            transform: ' scale(0.5) rotateZ(180);'
          },
          '100%': {
            '-webkit-transform': ' scale(1) rotateZ(360);',
            transform: ' scale(1) rotateZ(360);'
          },
        },
        'rotate-song-pause': {
          '0%': {
            '-webkit-transform': ' rotate(0);',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(-360deg);',
            transform: 'rotate(-360deg);'
          }
        },
        'scale-image': {
          '0%': {
            '-webkit-transform': ' scale(1);',
            transform: ' scale(1);'
          },
          '100%': {
            '-webkit-transform': ' scale(1);',
            transform: 'rotate(-360deg);'
          }
        },
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-song': 'rotate-song 8s linear infinite;',
        'rotate-song-pause': 'rotate-song-pause 0.5s linear 1 both;',
        'scale-thumb': 'scale-thumb 3s linear 1 both;',
      },
      flex: {
        '4': '4 4 0%'
      }
    },
    screens: {
      '1600': '1600px'
    }
  },
  plugins: [],
}
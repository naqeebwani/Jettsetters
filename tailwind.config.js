/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#6589bd",
        "heading-text": "#10439F"
      },
      backgroundImage: {
        'offer-image': "url(https://q-xx.bstatic.com/xdata/images/xphoto/714x300/316455553.jpeg?k=33c0362560b6aa7ff9ba2afc3ef8d120728107cf56cd1c006fcf0da8c1821735&o=)",
        "trip-image": "url(https://cf.bstatic.com/xdata/images/xphoto/540x405/292049346.webp?k=ad53f89eb6ed386bcdb6100d5c729e6db510900f74d8891baaab2bf2a2283631&o=)",
        "bg-image-none": "none",
        "bg-gradient-gold": "linear-gradient(to left, rgba(245,255,79,0.161589601660976934) 10%, rgba(224,235,5,0.119012570848652) 18%, rgba(232,244,2,0.18007699661896013) 19%, rgba(232,244,2,0.033262963388481) 59%, rgba(225,232,45,0.28007699661896013) 100%)"
      },
      dropShadow: {
        "head-shade": ["3px 2px 1px #59a3e9bb",
          "0px 0px 20px #1f5da979"]
      },
      fontFamily: {
        "heading": "Poetsen One",
        "content": "League Spartan",
      },
      animation: {
        "ping": "ping 2s cubic-bezier(.21,.05,.98,-0.23) infinite"
      },
      keyframes: {
        ping: {
          "75 %, 100 %": {
            transform: "scale(2)",
            opacity: "0",
          }
        }
      }
    },
  },
  plugins: [],
}


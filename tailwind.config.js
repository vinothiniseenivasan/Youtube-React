/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'custom-md': '980px',   // custom breakpoint at 1000px

        'custom-lg': '1600px',   // custom breakpoint at 1500px
         'custom-sm': '200px',
          'custom-sm-md': '600px'
      },
    },
  },
  plugins: [],
}

// className={`relative mt-16 w-[60%] md:w-[65%] lg:w-[82%] custom-md:w-[70%] custom-lg:w-[75%] ${
//   navBarStatus ? "lg:ml-72 md:ml-60" : "lg:mx-auto md:mx-auto"
// }`}
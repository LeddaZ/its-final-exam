/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'catppuccin-latte': {
          primary: '#1e66f5', // blue
          secondary: '#ea76cb', // pink
          accent: '#179299', // teal
          neutral: '#dce0e8', // crust
          'base-100': '#eff1f5', // base
          info: '#209fb5', // sapphire
          success: '#40a02b', // green
          warning: '#df8e1d', // yellow
          error: '#d20f39' // red
        },
        'catppuccin-mocha': {
          primary: '#89b4fa', // blue
          secondary: '#f5c2e7', // pink
          accent: '#94e2d5', // teal
          neutral: '#11111b', // crust
          'base-100': '#1e1e2e', // base
          info: '#74c7ec', // sapphire
          success: '#a6e3a1', // green
          warning: '#f9e2af', // yellow
          error: '#f38ba8' // red
        }
      }
    ],
    darkTheme: 'catppuccin-mocha',
    lightTheme: 'catppuccin-latte'
  }
}

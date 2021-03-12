module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  theme: {
    screens: {
      xs: '340px',
      sm: '640px',
      md: '768px',
      lg: '1180px',
      xl: '1520px',
      xxl: '2560px'
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        'dlot-logo': ['Comfortaa', 'sans-serif']
      },
      colors: {
        'dlot-teal': '#17a097',
        'dlot-blue': '#0e6dd0',
        'dlot-blue-haze': '#876aa9',
        gray: {
          100: '#a5a4a4',
          200: '#888787',
          300: '#777676',
          400: '#696868',
          500: '#525252',
          600: '#484848',
          700: '#353535',
          800: '#252525',
          900: '#151414'
        }
      },
      width: {
        'reading-small': '56rem',
        'reading-medium': '68rem',
        'reading-large': '80rem'
      },
      fontSize: {
        xxs: '0.6rem'
      }
    }
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled']
  }
}

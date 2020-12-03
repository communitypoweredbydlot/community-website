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
        'dlot-teal': '#16a99f',
        'dlot-blue-haze': '#cdc3d9',
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        }
      },
      width: {
        'reading-small': '56rem',
        'reading-medium': '68rem',
        'reading-large': '80rem'
      }
    }
  },
  variants: {}
}

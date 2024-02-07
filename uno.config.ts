import {
  defineConfig,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      inlineImports: true,
      fonts: {
        sans: [
          {
            name: 'Noto Sans TC',
            weights: ['400', '500', '700'],
            provider: 'google',
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '80px',
        // xl: '120px',
        // '2xl': '180px',
      },
      maxWidth: {
        DEFAULT: '100%',
        lg: '800px',
        xl: '1040px',
        '2xl': '1300px',
      },
    },
    colors: {
      primary: '#1E88E5',
      lightYellow: '#E4FF00'
    },
  },
})

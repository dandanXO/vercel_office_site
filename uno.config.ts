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
        'rammetto-one': [
          {
            name: 'Rammetto One',
            weights: ['400'],
            provider: 'google',
          },
        ],
        mulish: [
          {
            name: 'Mulish',
            weights: ['800'],
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
      primary: '#E4FF00',
      'neutral-07': '#141414',
    },
  },
})

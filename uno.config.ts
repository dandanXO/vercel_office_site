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
        DEFAULT: '20px',
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
      'neutral-01': '#FFFFFF',
      'neutral-03': '#F0F0F0',
      'neutral-04': '#DDDDDD',
      'neutral-05': '#A0A0A0',
      'neutral-06': '#6B6B6B',
      'neutral-07': '#141414',
    },
  },
})

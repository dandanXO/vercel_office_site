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
        raleway: [
          {
            name: 'Raleway',
            weights: ['500', '700', '900'],
            provider: 'google',
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    'header-1': 'text-40px font-700 leading-60px tracking-0.8px text-neutral-07',
    'header-2': 'text-32px font-500 leading-48px tracking-0.6px text-neutral-07',
    'heading-3': 'text-24px font-700 leading-36px tracking-0.6px text-neutral-06',
    'title-md': 'text-24px font-700 leading-[34.8px] tracking-[2%] text-neutral-07',
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '32px',
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
      'primary-bg': '#FEFFF4',
      'primary-hover': '#CDE600',
      'header-hover':'#ABC207',
      'primary-disable': '#F7FFB1',
      'neutral-01': '#FFFFFF',
      'neutral-03': '#F0F0F0',
      'neutral-04': '#DDDDDD',
      'neutral-05': '#A0A0A0',
      'neutral-06': '#6B6B6B',
      'neutral-07': '#141414',
      'blue-05': '#3393FF'
      
    },
  },
})

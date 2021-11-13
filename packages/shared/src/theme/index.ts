export const theme = {
  colors: {
    primary: {
      100: '#4D89AF',
      200: '#457B9D',
      300: '#3D6D8B',
      400: '#355F7A',
      500: '#5D98E7',
    },
    secondary: {
      50: '#FFD1AA',
      100: '#742674',
      200: '#601F60',
      300: '#4D194D',
    },
    neutral: {
      100: '#F3F4F6',
      200: '#F4F5F7',
      300: '#D1D5DB',
      400: '#737581',
      500: '#4A4B53',
      600: '#39393A',
    },
    light: {
      text: '#1F2937',
      background: '#F4F5F7',
    },
    dark: {
      text: '#F3F4F6',
      background: '#3D3F44',
    },
    success100: '#529E66',
    success200: '#367B48',
    success300: '#276738',
    warning100: '#E1C542',
    warning200: '#CAB23F',
    warning300: '#B49E35',
    error100: '#D0454C',
    error200: '#B54248',
    error300: '#95353A',
    blue: '#2F80ED',
  },
  spacing: {
    XS: '4px',
    S: '8px',
    M: '12px',
    L: '16px',
    XL: '24px',
    XXL: '32px',
  },
  zIndex: {
    z1:
      '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 2px 1px -1px rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    z2:
      '0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.1)',
    z3:
      '0 3px 4px 0 rgba(0, 0, 0, 0.07), 0 3px 3px -2px rgba(0, 0, 0, 0.06), 0 1px 8px 0 rgba(0, 0, 0, 0.1)',
    z4:
      '0 4px 5px 0 rgba(0, 0, 0, 0.07), 0 1px 10px 0 rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
    z5:
      '0 6px 10px 0 rgba(0, 0, 0, 0.07), 0 1px 18px 0 rgba(0, 0, 0, 0.06), 0 3px 5px -1px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme;
export type ThemeWithMode = Theme & {mode: 'light' | 'dark'};
export type ThemedValues = keyof Theme['colors']['light'];

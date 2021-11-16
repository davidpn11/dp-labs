import {ThemeGenParams, Theme} from '@dplabs/qik-ui';

export const themeGenParams: ThemeGenParams = {
  primaryColor: '#3D6D8B',
  accentColor: '#F49D37',
  mainWhite: '#F4F5F7',
  mainDark: '#4A4B53',
  green: '#367B48',
  yellow: '#CAB23F',
  red: '#B54248',
  fontFamily: 'Overpass',
  mode: 'light',
};

export type ComplementaryTheme = {
  spacing: {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
    XXL: string;
  };
  zIndex: {
    z1: string;
    z2: string;
    z3: string;
    z4: string;
    z5: string;
  };
};

export const labsComplementaryTheme = {
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

export type LabsTheme = Theme; //Theme & ComplementaryTheme;

// export const theme = {
//   colors: {
//     primary: {
//       100: '#4D89AF',
//       200: '#457B9D',
//       300: '#3D6D8B',
//       400: '#355F7A',
//       500: '#5D98E7',
//     },
//     secondary: {
//       50: '#FFD1AA',
//       100: '#742674',
//       200: '#601F60',
//       300: '#4D194D',
//     },
//     neutral: {
//       100: '#F3F4F6',
//       200: '#F4F5F7',
//       300: '#D1D5DB',
//       400: '#737581',
//       500: '#4A4B53',
//       600: '#39393A',
//     },
//     light: {
//       text: '#1F2937',
//       background: '#F4F5F7',
//     },
//     dark: {
//       text: '#F3F4F6',
//       background: '#3D3F44',
//     },
//     success100: '#529E66',
//     success200: '#367B48',
//     success300: '#276738',
//     warning100: '#E1C542',
//     warning200: '#CAB23F',
//     warning300: '#B49E35',
//     error100: '#D0454C',
//     error200: '#B54248',
//     error300: '#95353A',
//     blue: '#2F80ED',
//   },
// };

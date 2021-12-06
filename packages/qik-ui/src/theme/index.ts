import {lighten, darken} from 'polished';

export type Mode = 'light' | 'dark';
export type ThemeGenParams = {
  primaryColor: string;
  accentColor: string;
  mainDark: string;
  mainWhite: string;
  green: string;
  red: string;
  yellow: string;
  fontFamily: string;
  mode: Mode;
};

export type Alias = {
  background: string;
  text: string;
  textInverse: string;
  accent: string;
  hover: string;
  active: string;
};

export type AliasKeys = keyof Alias;

export type Theme = {
  mode: Mode;
  colors: {
    primary: {
      100: string;
      200: string;
      300: string;
    };
    secondary: {
      100: string;
      200: string;
      300: string;
    };
    neutral: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    green: string;
    red: string;
    yellow: string;
  };
  font: {
    family: string;
    weight: {
      regular: string;
      bold: string;
      extraBold: string;
    };
  };
  light: Alias;
  dark: Alias;
};

export type ThemeCombiner<T = {}> = Theme & T;

export const defaultTheme: Theme = {
  mode: 'light',
  colors: {
    primary: {
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
      600: '#4A4B53',
    },
    secondary: {
      100: '#F49D37',
      200: '#F49D37',
      300: '#F49D37',
    },
    green: '#367B48',
    red: 'B54248',
    yellow: 'CAB23F',
  },
  font: {
    family: 'Core Sans',
    weight: {
      regular: 'normal',
      bold: '600',
      extraBold: '800',
    },
  },
  dark: {
    background: '',
    text: '',
    textInverse: '',
    accent: '',
    hover: '',
    active: '',
  },
  light: {
    background: '',
    text: '',
    textInverse: '',
    accent: '',
    hover: '',
    active: '',
  },
};

export function themeGen({
  primaryColor,
  accentColor,
  mainDark,
  mainWhite,
  fontFamily,
  ...rest
}: ThemeGenParams): Theme {
  const primaries = {
    100: lighten(0.1, primaryColor),
    200: primaryColor,
    300: darken(0.1, primaryColor),
  };
  const secondary = {
    100: lighten(0.1, accentColor),
    200: accentColor,
    300: darken(0.1, accentColor),
  };

  const neutral = {
    100: lighten(0.1, mainWhite),
    200: mainWhite,
    300: darken(0.1, mainWhite),
    400: lighten(0.1, mainDark),
    500: mainDark,
    600: darken(0.1, mainDark),
  };

  const alias: {light: Alias; dark: Alias} = {
    light: {
      background: neutral[200],
      text: neutral[500],
      accent: primaries[200],
      hover: primaries[200],
      active: primaries[300],
      textInverse: neutral[200],
    },
    dark: {
      background: neutral[500],
      accent: accentColor,
      text: neutral[200],
      textInverse: neutral[500],
      hover: primaries[200],
      active: primaries[300],
    },
  };

  return {
    mode: 'light',
    colors: {
      primary: primaries,
      secondary,
      neutral,
      ...rest,
    },
    font: {
      family: fontFamily,
      weight: {
        regular: 'normal',
        bold: '600',
        extraBold: '800',
      },
    },
    ...alias,
  };
}

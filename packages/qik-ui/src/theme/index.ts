import {lighten, darken} from 'polished';

export type ThemeGenParams = {
  primaryColor: string;
  accentColor: string;
  mainDark: string;
  mainWhite: string;
  green?: string;
  red?: string;
  yellow?: string;
};

export type Theme = {
  colors: {
    primary: {
      100: string;
      200: string;
      300: string;
    };
    accent: {
      default: string;
      strong: string;
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
};

const defaultTheme: Theme = {
  colors: {
    primary: {
      100: '#742674',
      200: '#601F60',
      300: '#4D194D',
    },
    accent: {
      default: '#F49D37',
      strong: '#F49D37',
    },
    neutral: {
      100: '#F3F4F6',
      200: '#F4F5F7',
      300: '#D1D5DB',
      400: '#737581',
      500: '#4A4B53',
      600: '#4A4B53',
    },
    green: '#367B48',
    red: 'B54248',
    yellow: 'CAB23F',
  },
};

export function themeGen({
  primaryColor,
  accentColor,
  mainDark,
  mainWhite,
  ...rest
}: ThemeGenParams): Theme {
  const primaries = {
    100: lighten(0.1, primaryColor),
    200: primaryColor,
    300: darken(0.1, primaryColor),
  };

  const accent = {
    default: lighten(0.1, accentColor),
    strong: darken(0.1, primaryColor),
    300: darken(0.1, primaryColor),
  };

  const neutral = {
    100: lighten(0.1, mainWhite),
    200: mainWhite,
    300: darken(0.1, mainWhite),
    400: lighten(0.1, mainDark),
    500: mainDark,
    600: darken(0.1, mainDark),
  };

  return {
    colors: {
      ...defaultTheme.colors,
      primary: primaries,
      accent,
      neutral,
      ...rest,
    },
  };
}

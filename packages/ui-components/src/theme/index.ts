export const theme = {
  colors: {
    primary100: "#F36D00",
    primary200: "#DA6200",
    primary300: "#C05600",
    primary400: "#C05600",
    neutral100: "#FFFFFF",
    neutral200: "#F4F5F7",
    neutral300: "#E1E1E1",
    neutral400: "#737581",
    neutral500: "#4A4B53",
    success100: "#529E66",
    success200: "#367B48",
    success300: "#276738",
    warning100: "#E1C542",
    warning200: "#CAB23F",
    warning300: "#B49E35",
    error100: "#D0454C",
    error200: "#B54248",
    error300: "#95353A",
    blue: "#2F80ED",
  },
  spacing: {
    none: "0px",
    XS: "4px",
    S: "8px",
    default: "12px",
    L: "16px",
    XL: "24px",
    XXL: "32px",
  },
  elevation: {
    e1:
      "0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 2px 1px -1px rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    e2:
      "0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.1)",
    e3:
      "0 3px 4px 0 rgba(0, 0, 0, 0.07), 0 3px 3px -2px rgba(0, 0, 0, 0.06), 0 1px 8px 0 rgba(0, 0, 0, 0.1)",
    e4:
      "0 4px 5px 0 rgba(0, 0, 0, 0.07), 0 1px 10px 0 rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
    e5:
      "0 6px 10px 0 rgba(0, 0, 0, 0.07), 0 1px 18px 0 rgba(0, 0, 0, 0.06), 0 3px 5px -1px rgba(0, 0, 0, 0.1)",
  },
};

export type Theme = typeof theme;

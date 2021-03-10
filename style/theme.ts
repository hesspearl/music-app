import { DefaultTheme, Theme } from "@react-navigation/native";

export const defaultTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#DCF0FF",
    background: "#DEAAFF",
    card: "#FFDFF7",
    text: "#D392FC",
  },
};

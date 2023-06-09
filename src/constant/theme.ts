import { extendTheme, ITheme } from "native-base";

// const schema = {
// 50: "#f8fafc",
// 100: "#f1f5f9",
// 200: "#e2e8f0",
// 300: "#cbd5e1",
// 400: "#818cf8",
// 500: "#4f46e5",
// 600: "#0284c7",
// 700: "#004282",
// 800: "#002851",
// 900: "#000e21",
// };

const schema = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#0fd8f5",
  400: "#818cf8",
  500: "#4f46e5",
  600: "#0284c7",
  700: "#004282",
  800: "#002851",
  900: "#000e21",
};

const dark = {
  primary: schema[300],
  background: schema[900],
  card: schema[900],
  text: "#f3f3f3",
  border: schema[400],
  notification: schema[400],
};

const light = {
  primary: schema[700],
  background: schema[50],
  card: schema[50],
  text: "#121212",
  border: schema[600],
  notification: schema[600],
};

export const theme: ITheme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "light",
  },
  colors: {
    primary: schema,
    text: schema,
    dark: dark,
    light: light,
  },
  fonts: {},
  components: {
    Button: {
      baseStyle: {
        rounded: 16,
        size: "xl",
        p: 4,
        _text: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      },
      defaultProps: {
        colorScheme: "primary",
        variant: "solid",
        size: "lg",
        p: 4,
      },
      variants: {
        solid: {
          bg: "dark.primary",
        },
      },
    },
    Input: {
      baseStyle: {},
      defaultProps: {
        colorScheme: "primary",
        variant: "filled",
        rounded: 16,
        fontSize: "md",
        p: 4,
      },
    },
    Select: {
      defaultProps: {
        colorScheme: "primary",
        variant: "filled",
        rounded: 16,
        fontSize: "md",
        p: 4,
      },
    },
    ModalContent: {
      baseStyle: {
        _light: { bg: "primary.50" },
        _dark: { bg: "primary.900" },
      },
    },
  },
});

export const navLightTheme = {
  dark: false,
  colors: light,
};

export const navDarkTheme = {
  dark: true,
  colors: dark,
};

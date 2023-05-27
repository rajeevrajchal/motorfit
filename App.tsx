import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";

import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { useColorScheme } from "react-native";

import { theme } from "src/constant/theme";
import Main from "src/main";

const App = () => {
  const mode = useColorScheme();
  theme.config.initialColorMode = mode;

  return (
    <NativeBaseProvider theme={theme}>
      <Main theme={theme} />
    </NativeBaseProvider>
  );
};

export default App;

import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";

import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { useColorScheme } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "src/constant/theme";
import Main from "src/main";

const client = new QueryClient();

const App = () => {
  const mode = useColorScheme();
  theme.config.initialColorMode = mode;

  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={client}>
        <Main theme={theme} />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;

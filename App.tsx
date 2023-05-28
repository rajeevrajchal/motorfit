import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";

import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { useColorScheme } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "src/constant/theme";
import Main from "src/main";
import { I18nextProvider } from "react-i18next";
import i18n from "src/plugins/i18n";

const client = new QueryClient();

const App = () => {
  const mode = useColorScheme();
  theme.config.initialColorMode = mode;

  return (
    <NativeBaseProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={client}>
          <Main theme={theme} />
        </QueryClientProvider>
      </I18nextProvider>
    </NativeBaseProvider>
  );
};

export default App;

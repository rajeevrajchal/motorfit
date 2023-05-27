import React from "react";
import { StatusBar } from "expo-status-bar";
import { Box, ITheme, Spinner, useColorMode } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "src/hooks/context/useAuth";
import useCachedResources from "src/hooks/useCacheResource";

import { navDarkTheme, navLightTheme } from "src/constant/theme";
import linking from "src/constant/linking";

import AppNavigator from "./navigation";

const Main: React.FC<{ theme: ITheme }> = ({ theme }) => {
  const isLoadingComplete = useCachedResources();
  const { colorMode } = useColorMode();

  return (
    <>
      {!isLoadingComplete && <Spinner size="lg" />}

      {isLoadingComplete && (
        <AuthProvider>
          <NavigationContainer
            linking={linking}
            theme={colorMode === "dark" ? navDarkTheme : navLightTheme}
          >
            <Box flex={1}>
              <StatusBar style={colorMode === "dark" ? "light" : "dark"} />
              <AppNavigator />
            </Box>
          </NavigationContainer>
        </AuthProvider>
      )}
    </>
  );
};

export default Main;

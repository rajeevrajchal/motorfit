// core
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Box,
  Center,
  ITheme,
  Spinner,
  Text,
  Button,
  useColorMode,
} from "native-base";

import useCachedResources from "./hooks/useCacheResource";

const Main: React.FC<{ theme: ITheme }> = ({ theme }) => {
  const isLoadingComplete = useCachedResources();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {!isLoadingComplete && <Spinner size="lg" />}

      {isLoadingComplete && (
        <>
          <StatusBar />
          <Center flex={1}>
            <Box
              p={4}
              maxW="300"
              _dark={{
                bg: "coolGray.800",
              }}
              _light={{
                bg: "warmGray.50",
              }}
            >
              <Text fontSize="lg" display="flex" mb="20">
                The active color mode is{" "}
                <Text bold fontSize="lg">
                  {colorMode}
                </Text>
              </Text>
              <Button onPress={toggleColorMode}>Toggle</Button>
            </Box>
          </Center>
        </>
      )}
    </>
  );
};

export default Main;

import { useNavigation } from "@react-navigation/native";
import { Center, Text, Box, Button, useColorMode, Stack } from "native-base";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ROUTE } from "src/navigation/route";
import { NavigationProp } from "src/types/navigation.type";

const Welcome = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigation = useNavigation<NavigationProp["navigation"]>();
  const { t } = useTranslation();

  return (
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
          <Text>{t("common.welcome")}</Text>
          <Text>{t("common.love")}</Text>
        </Text>
        <Stack space={8}>
          <Button onPress={toggleColorMode}>Toggle</Button>
          <Button onPress={() => navigation.navigate(ROUTE.login)}>
            Go to welcome
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};
export default Welcome;

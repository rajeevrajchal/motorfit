import {
  Box,
  Text,
  Center,
  Stack,
  HStack,
  Button,
  useColorMode,
  ScrollView,
} from "native-base";
import { ReactElement } from "react";
import { ImageBackground } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import KeyboardAvoidingComponent from "src/components/KeyboardAvoidingView";

interface AuthLayoutProps {
  title: string;
  description: string;
  children?: ReactElement;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children, description, title } = props;

  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <KeyboardAvoidingComponent>
      <Box
        flex={1}
        _dark={{
          bg: "dark.background",
        }}
        _light={{
          bg: "white",
        }}
      >
        <Box height={400}>
          <ImageBackground
            source={require("../../../../assets/logo/background.png")}
            resizeMode="center"
            style={{
              height: "100%",
            }}
          />
        </Box>
        <Stack px={8} space={8} flex={1}>
          <Stack space={2}>
            {title && (
              <Text fontWeight="bold" fontSize="3xl" textTransform="capitalize">
                {title}
              </Text>
            )}
            {description && (
              <Text
                fontSize="sm"
                _dark={{
                  color: "dark.text",
                }}
                _light={{
                  color: "light.text",
                }}
                textAlign="justify"
              >
                {description}
              </Text>
            )}
          </Stack>
          <Stack space={4} flex={1}>
            {children}
            <Center>
              <Stack
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                space={4}
              >
                <Text textTransform="uppercase">{t("api.or")}</Text>
                <HStack space={4}>
                  <Button variant="outline" w={16} borderColor="dark.primary">
                    <AntDesign
                      name="google"
                      size={24}
                      color={colorMode === "dark" ? "white" : "black"}
                    />
                  </Button>
                  <Button variant="outline" w={16} borderColor="dark.primary">
                    <FontAwesome
                      name="facebook-f"
                      size={24}
                      color={colorMode === "dark" ? "white" : "black"}
                    />
                  </Button>
                  <Button borderColor="dark.primary" variant="outline" w={16}>
                    <AntDesign
                      name="instagram"
                      size={24}
                      color={colorMode === "dark" ? "white" : "black"}
                    />
                  </Button>
                </HStack>
              </Stack>
            </Center>
          </Stack>
        </Stack>
      </Box>
    </KeyboardAvoidingComponent>
  );
};
export default AuthLayout;

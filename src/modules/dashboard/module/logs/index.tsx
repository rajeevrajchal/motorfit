import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { t } from "i18next";
import { Stack, Box, Text } from "native-base";
import { NavigationProp } from "src/types/navigation.type";
import logsMenu from "src/constant/log-menu";
import { filter } from "lodash";

const Logs = () => {
  const navigation = useNavigation<NavigationProp["navigation"]>();

  return (
    <Box flex={1} safeArea py={4}>
      <Stack space={2}>
        <Text fontSize="md" fontWeight="bold" px={4}>
          {t("api.category")}
        </Text>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          space={4}
          px={3}
        >
          {filter(logsMenu, ["featureEnable", true]).map((item) => (
            <TouchableOpacity
              key={item.label}
              onPress={() => navigation.navigate(item.url)}
              style={{
                width: "50%",
                paddingHorizontal: 4,
                paddingVertical: 4,
              }}
            >
              <Stack
                _dark={{
                  bg: "light.primary",
                }}
                _light={{
                  bg: "dark.primary",
                }}
                height={160}
                p={2}
                rounded={8}
                space={2}
              >
                <Text
                  textTransform="capitalize"
                  fontWeight="bold"
                  fontSize="lg"
                  px={2}
                >
                  {item.label}
                </Text>
                <Box
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  mt={-2}
                >
                  {item.icon}
                </Box>
              </Stack>
            </TouchableOpacity>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
export default Logs;

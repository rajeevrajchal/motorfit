import { Button, Stack, Text } from "native-base";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import { NavigationProp } from "src/types/navigation.type";
import AuthLayout from "../layout/auth.layout";
import { ROUTE } from "src/navigation/route";

const Welcome = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp["navigation"]>();

  return (
    <AuthLayout
      title={t("api.welcome")}
      description={t("api.welcome_description")}
    >
      <Stack space={4}>
        <Button onPress={() => navigation.navigate(ROUTE.login)}>
          {t("api.login")}
        </Button>
        <Button
          onPress={() => navigation.navigate(ROUTE.login)}
          variant="ghost"
        >
          {t("api.signup")}
        </Button>
      </Stack>
    </AuthLayout>
  );
};
export default Welcome;

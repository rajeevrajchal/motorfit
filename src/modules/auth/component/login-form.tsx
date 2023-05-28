import { Button, Stack, Text } from "native-base";
import { useTranslation } from "react-i18next";

import Input from "src/components/form/Input";

const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <Stack space={8}>
      <Input label={String(t("api.email"))} />
      <Button>
        <Text textTransform="capitalize" fontWeight="bold">
          {t("api.login")}
        </Text>
      </Button>
    </Stack>
  );
};
export default LoginForm;

import { useFormik } from "formik";
import { Button, Spinner, Stack, Text } from "native-base";
import { useTranslation } from "react-i18next";

import Input from "src/components/form/Input";
import loginValidationSchema from "../validation/auth-login.validation";
import { useAuth } from "src/hooks/context/useAuth";

const LoginForm = () => {
  const { t } = useTranslation();
  const { loginWithMagicLink } = useAuth();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      loginWithMagicLink.mutate(values);
    },
  });

  return (
    <Stack space={8}>
      <Input
        label={String(t("api.email"))}
        placeholder={String(t("field.email_placeholder"))}
        value={loginFormik.values.email}
        onChangeText={loginFormik.handleChange("email")}
        errorMsg={
          loginFormik.touched.email && loginFormik.errors.email
            ? loginFormik.errors.email
            : ""
        }
      />
      <Button onPress={() => loginFormik.handleSubmit()}>
        {loginWithMagicLink.isLoading ? (
          <Spinner size="sm" />
        ) : (
          <Text textTransform="capitalize" fontWeight="bold">
            {t("api.login")}
          </Text>
        )}
      </Button>
    </Stack>
  );
};
export default LoginForm;

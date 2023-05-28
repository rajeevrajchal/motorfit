import { Stack, Text } from "native-base";
import AuthLayout from "../layout/auth.layout";
import { useTranslation } from "react-i18next";
import LoginForm from "../component/login-form";

const Login = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout title={t("api.login")} description={t("api.login_description")}>
      <LoginForm />
    </AuthLayout>
  );
};
export default Login;

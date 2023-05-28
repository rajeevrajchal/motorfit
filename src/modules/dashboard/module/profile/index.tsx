import { Button, Center, Spinner, Text } from "native-base";
import { useTranslation } from "react-i18next";
import { useAuth } from "src/hooks/context/useAuth";

const Profile = () => {
  const { singOutUser } = useAuth();
  const { t } = useTranslation();

  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex" mb="20">
        Welcome to Profile
      </Text>
      <Button onPress={() => singOutUser.mutate()}>
        {singOutUser.isLoading ? (
          <Spinner size="sm" />
        ) : (
          <Text textTransform="capitalize" fontWeight="bold">
            {t("api.logout")}
          </Text>
        )}
      </Button>
    </Center>
  );
};
export default Profile;

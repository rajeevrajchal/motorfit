import { useNavigation } from "@react-navigation/native";
import { Center, Text, Button } from "native-base";
import { NavigationProp } from "src/types/navigation.type";

const Login = () => {
  const navigation = useNavigation<NavigationProp["navigation"]>();

  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex" mb="20">
        Welcome to login
      </Text>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </Center>
  );
};
export default Login;

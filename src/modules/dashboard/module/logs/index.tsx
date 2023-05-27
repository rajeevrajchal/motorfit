import { useNavigation } from "@react-navigation/native";
import { Button, Stack, Center, Text } from "native-base";
import { ROUTE } from "src/navigation/route";
import { NavigationProp } from "src/types/navigation.type";

const Logs = () => {
  const navigation = useNavigation<NavigationProp["navigation"]>();
  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex" mb="20">
        Welcome to Logs
      </Text>
      <Stack space={4}>
        <Button onPress={() => handleNavigation(ROUTE.service)}>
          Services
        </Button>
        <Button onPress={() => handleNavigation(ROUTE.gas)}>Gases</Button>
      </Stack>
    </Center>
  );
};
export default Logs;

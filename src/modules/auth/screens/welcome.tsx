import { useNavigation } from "@react-navigation/native";
import { Center, Text, Box, Button, useColorMode } from "native-base";
import { ROUTE } from "src/navigation/route";
import { NavigationProp } from "src/types/navigation.type";

const Welcome = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigation = useNavigation<NavigationProp["navigation"]>();

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
        </Text>
        <Button onPress={toggleColorMode}>Toggle</Button>
        <Button onPress={() => navigation.navigate(ROUTE.login)}>
          Go to welcome
        </Button>
      </Box>
    </Center>
  );
};
export default Welcome;

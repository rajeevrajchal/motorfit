import { Center, Text, Box, Button, useColorMode } from "native-base";
const Welcome = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
      </Box>
    </Center>
  );
};
export default Welcome;

import { Center, Text } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import FloatingButton from "src/components/FloatingButton";
import { useState } from "react";
import BottomModal from "src/components/BottomModal";

const Gas = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Center flex={1}>
      <Text fontSize="lg" display="flex" mb="20">
        Welcome to Gas List
      </Text>
      <FloatingButton
        onPress={() => setOpen(!open)}
        icon={<FontAwesome5 name="gas-pump" size={24} color="#565D5E" />}
      />
      <BottomModal
        open={open}
        title="Add Record for Gas | EV"
        component={<Text>Hello add modal</Text>}
        onClose={() => setOpen(false)}
      />
    </Center>
  );
};
export default Gas;

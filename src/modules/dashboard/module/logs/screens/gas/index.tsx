import { Box, Text } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import FloatingButton from "src/components/FloatingButton";
import { useState } from "react";
import BottomModal from "src/components/BottomModal";
import { useTranslation } from "react-i18next";
import CreateLog from "../../components/create-logs";

const Gas = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box safeArea flex={1} position="relative">
      <Text fontSize="lg" display="flex" mb="20">
        Welcome to Gas List
      </Text>
      <FloatingButton
        onPress={() => setOpen(!open)}
        icon={<FontAwesome5 name="gas-pump" size={24} color="#565D5E" />}
      />
      <BottomModal
        open={open}
        title={t("api.add_gas_or_ev")}
        component={<CreateLog />}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
};
export default Gas;

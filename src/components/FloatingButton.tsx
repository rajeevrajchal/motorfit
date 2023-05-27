import { Feather } from "@expo/vector-icons";
import { ReactElement } from "react";
import { TouchableOpacity } from "react-native";

interface FloatingButtonProps {
  onPress: () => void;
  icon?: ReactElement;
}
const FloatingButton = (props: FloatingButtonProps) => {
  const { onPress, icon } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 48,
        right: 24,
        width: 60,
        height: 60,
        backgroundColor: "#00DCFB",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon ? icon : <Feather name="plus" size={28} color="#565D5E" />}
    </TouchableOpacity>
  );
};

export default FloatingButton;

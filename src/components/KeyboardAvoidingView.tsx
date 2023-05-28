import { KeyboardAvoidingView as NKeyboardAvoidingView } from "native-base";
import { ReactElement } from "react";
import { Platform, Keyboard, TouchableWithoutFeedback } from "react-native";

interface KeyboardAvoidingViewProps {
  children: ReactElement;
}
const KeyboardAvoidingView = (props: KeyboardAvoidingViewProps) => {
  const { children } = props;

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <NKeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        {children}
      </NKeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default KeyboardAvoidingView;

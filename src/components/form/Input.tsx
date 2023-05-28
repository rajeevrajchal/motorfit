import {
  Stack,
  FormControl,
  WarningOutlineIcon,
  Input as NInput,
  useColorMode,
} from "native-base";
import { TextInputProps } from "react-native";
import { omit } from "lodash";
import { InterfaceInputProps } from "native-base/lib/typescript/components/primitives/Input/types";

interface InputProps extends TextInputProps {
  label?: string;
  errorMsg?: string;
  isDisabled?: boolean;
  type?: "number" | "text";
}

const Input = (props: InputProps) => {
  const { label, type = "text", errorMsg, isDisabled } = props;
  const { colorMode } = useColorMode();

  const placeholderColor = colorMode === "dark" ? "white" : "black";

  return (
    <FormControl isInvalid={Boolean(errorMsg)} isDisabled={isDisabled}>
      <Stack space={1}>
        {label && (
          <FormControl.Label
            _text={{
              _dark: {
                color: "dark.text",
              },
              _light: {
                color: "light.text",
              },
              ml: 1,
            }}
          >
            Email
          </FormControl.Label>
        )}
        <NInput
          placeholder="Enter text"
          autoCapitalize="none"
          keyboardAppearance="default"
          keyboardType={type === "number" ? "numeric" : "default"}
          placeholderTextColor={placeholderColor}
          style={{
            color: placeholderColor,
          }}
          {...omit(props as InterfaceInputProps, [
            "label",
            "errorMsg",
            "isDisabled",
          ])}
        />
        {errorMsg && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errorMsg}
          </FormControl.ErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};
export default Input;

import { Modal, ScrollView } from "native-base";
import { ReactElement } from "react";
import KeyboardAvoidingView from "./KeyboardAvoidingView";

interface BottomModalProps {
  open: boolean;
  title: string;
  component: ReactElement;
  onClose: () => void;
}

const BottomModal = (props: BottomModalProps) => {
  const { open, title, component, onClose } = props;

  return (
    <Modal
      avoidKeyboard
      size="full"
      animationPreset="slide"
      isOpen={open}
      safeAreaTop={true}
      onClose={onClose}
    >
      <Modal.Content marginTop="auto" pb={8}>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body flex={1}>
          <ScrollView minH={300} maxHeight={600}>
            <KeyboardAvoidingView>{component}</KeyboardAvoidingView>
          </ScrollView>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
export default BottomModal;

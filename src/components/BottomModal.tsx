import { Modal } from "native-base";
import { ReactElement } from "react";

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
      isOpen={open}
      onClose={onClose}
      safeAreaTop={true}
      size="full"
      avoidKeyboard
      animationPreset="slide"
    >
      <Modal.Content marginBottom={0} marginTop="auto" bg="white">
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body minH={300}>{component}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
export default BottomModal;

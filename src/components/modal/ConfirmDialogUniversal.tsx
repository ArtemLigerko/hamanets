import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

interface ConfirmProps {
  actionButton: string | JSX.Element;
  title: string;
  body?: string;
  okButton: string;
  okButtonColorScheme?: string;
  cancelButton: string;
  handleOk: any;
}

const AlertDialogUniversal = ({
  actionButton,
  title,
  body,
  okButton,
  okButtonColorScheme,
  cancelButton,
  handleOk,
}: ConfirmProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const handleOkAndClose = () => {
    handleOk();
    onClose();
  };

  return (
    <>
      <div onClick={onOpen}>{actionButton}</div>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>{body}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {cancelButton}
              </Button>
              <Button
                colorScheme={okButtonColorScheme}
                onClick={handleOkAndClose}
                ml={3}
              >
                {okButton}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlertDialogUniversal;

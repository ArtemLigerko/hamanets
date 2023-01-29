import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const WalletFormChakra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen} size="sm">
        New wallet
      </Button>
      {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Додайте новий рахунок</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Назва рахунку</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Рахунок"
                // defaultValue="Новий рахунок"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Сума на рахунку</FormLabel>
              <Input placeholder="Сумма" defaultValue={0} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalletFormChakra;

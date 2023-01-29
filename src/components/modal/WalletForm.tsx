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
import { yupResolver } from "@hookform/resolvers/yup";
import { nanoid } from "nanoid";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

import { useAppDispatch } from "../../redux/hooks";
import { walletsActions } from "../../redux/reducers/wallets";
import { IWallet } from "../../types";

const schema = yup
  .object()
  .shape({
    walletName: yup.string().required("Введіть назву рахунку"),
    initialSum: yup
      .number()
      .typeError("Повинно бути число")
      .nullable()
      .min(0, "Сумма повинна бути позитивна чи 0")
      .required("Введіть число"),
  })
  .required("hh");

const WalletForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IWallet>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IWallet> = (data) => {
    console.log(data);
    dispatch(
      walletsActions.createWallet({
        ...data,
        id: nanoid(),
        createdAt: new Date(),
        updatedAt: new Date(),
        total: data.initialSum,
      })
    );
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="blue">
        додати рахунок
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
            <form>
              <FormControl>
                <FormLabel>Назва рахунку</FormLabel>
                <Input
                  // ref={initialRef}
                  placeholder="Рахунок"
                  // defaultValue="Новий рахунок"
                  type="text"
                  {...register("walletName")}
                />
                {errors.walletName && <p>{errors?.walletName.message}</p>}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Сума на рахунку</FormLabel>
                <Input
                  placeholder="Сумма"
                  defaultValue={0}
                  {...register("initialSum")}
                />
                {errors.initialSum && <p>{errors?.initialSum.message}</p>}
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalletForm;

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
  Select,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

import { revenueCategoryList, spendCategoryList } from "../../lists";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { transactionsActions } from "../../redux/reducers/transactions";
import { walletsActions } from "../../redux/reducers/wallets";
import { ITransaction } from "../../types";

interface ISpendingForm {
  title: string;
  button: string;
  isSpend: boolean;
}

const schema = yup
  .object()
  .shape({
    walletName: yup.string().required("Потрібно вказати рахунок"),
    sum: yup
      .number()
      .moreThan(-0.99, `Сумма повинна бути позитивною або "0"`)
      .required("Введіть сумму"),
  })
  .required();

const TransactionForm = ({ title, button, isSpend }: ISpendingForm) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const dispatch = useAppDispatch();

  const wallets = useAppSelector((store) => store.wallets.wallets.docs);

  const currentWalletId = (walletName: string) => {
    const targetWallet = wallets.find((item) => walletName === item.walletName);
    return targetWallet?._id;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITransaction>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ITransaction> = (data) => {
    const walletId = currentWalletId(data.walletName);
    const transactionSum =
      Math.round((isSpend ? -data.sum : +data.sum) * 100) / 100;

    dispatch(
      transactionsActions.createTransaction({
        ...data,
        wallet_id: walletId,
        walletName: data.walletName,
        type: isSpend ? "витрати" : "прибуток",
        sum: transactionSum,
      })
    );

    dispatch(walletsActions.addTransactionSum({ walletId, transactionSum }));

    reset();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} size="sm" colorScheme="blue">
        {button}
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
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <FormControl>
                <FormLabel>Рахунок</FormLabel>
                <Select {...register("walletName")}>
                  {wallets.map((wallet: any) => {
                    return (
                      <option key={wallet._id}>{wallet.walletName}</option>
                    );
                  })}
                </Select>
                {errors.walletName && <p>{errors?.walletName.message}</p>}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Стаття</FormLabel>
                <Select {...register("category")}>
                  {isSpend
                    ? spendCategoryList.map((category) => {
                        return (
                          <option key={category.id}>{category.name}</option>
                        );
                      })
                    : revenueCategoryList.map((category) => {
                        return (
                          <option key={category.id}>{category.name}</option>
                        );
                      })}
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Сума</FormLabel>
                <Input
                  {...register("sum")}
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter") {
                  //     handleSubmit(onSubmit);
                  //   }
                  // }}
                />
                {errors.sum && <p>{errors?.sum.message}</p>}
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

export default TransactionForm;

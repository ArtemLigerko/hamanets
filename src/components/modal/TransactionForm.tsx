import { yupResolver } from "@hookform/resolvers/yup";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

import { revenueCategoryList, spendCategoryList } from "../../lists";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { transactionsActions } from "../../redux/reducers/transactions";
import { localDate } from "../../services/localDateTime";
import { ITransaction } from "../../types";
import ModalUniversal from "./ModalUniversal";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  /* margin: 5px 0; */
`;

const Input = styled.input`
  margin: 0 0 10px 0;
`;

const Select = styled.select`
  margin: 0 0 10px 0;
`;

interface ISpendingForm {
  title: string;
  button: string;
  isSpend: boolean;
}

const schema = yup
  .object()
  .shape({
    createdAt: yup.string().required("Please, enter a valid date"),
    sum: yup.number().required("Enter number"),
  })
  .required();

const TransactionForm = ({ title, button, isSpend }: ISpendingForm) => {
  const { register, handleSubmit, reset } = useForm<ITransaction>({
    resolver: yupResolver(schema),
  });

  const [show, setShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const wallets = useAppSelector(
    (store) => store.user.userData.capital.wallets
  );

  const transactions = useAppSelector((store) => store.transactions);

  const currentWalletId = (wallet: string) => {
    return wallets.find((item) => wallet === item.walletName);
  };

  // let toggleClose;

  useEffect((): void => {
    console.log("dispatching transactionsActions.getTransactions...");
    dispatch(transactionsActions.getTransactions());
    console.log(transactions);
  }, []);

  const onSubmit: SubmitHandler<ITransaction> = (data) => {
    dispatch(
      transactionsActions.createTransaction({
        ...data,
        id: nanoid(),
        walletId: currentWalletId(data.walletName)?.id,
        walletName: data.walletName,
        type: isSpend ? "витрати" : "прибуток",
        sum: isSpend ? -data.sum : +data.sum,
      })
    );

    reset();
    setShow(false);
  };

  let i = 0;

  const SpendingForm = (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Дата</Label>
      <Input {...register("createdAt")} defaultValue={localDate} />

      <Label>Рахунок</Label>
      <Select {...register("walletName")}>
        {wallets.map((wallet: any) => {
          return <option key={wallet.id}>{wallet.walletName}</option>;
        })}
      </Select>

      <Label>Стаття</Label>
      <Select {...register("category")}>
        {isSpend
          ? spendCategoryList.map((category) => {
              return <option key={i++}>{category}</option>;
            })
          : revenueCategoryList.map((category) => {
              return <option key={i++}>{category}</option>;
            })}
      </Select>

      <Label>Сума</Label>
      <Input {...register("sum")} />

      <Input type="submit" value="Зберегти" />
    </StyledForm>
  );

  return (
    <>
      <ModalUniversal
        title={title}
        button={button}
        content={SpendingForm}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default TransactionForm;

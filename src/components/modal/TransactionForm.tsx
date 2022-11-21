import { nanoid } from "@reduxjs/toolkit";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
// import { yupResolver } from "@hookform/resolvers/yup";

import ModalUniversal from "./ModalUniversal";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { userActions } from "../../redux/reducers/user";

import { revenueCategoryList, spendCategoryList } from "../../lists";
import { localDate } from "../../services/localDateTime";
import { ITransactions } from "../../types";

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

// const schema = yup
// .object({
//   createdAt: yup
//     .string()
//     .required("Please, enter a valid date")
//   sum: yup.number().required("Enter number"),
// })
// .required();

const TransactionForm = ({ title, button, isSpend }: ISpendingForm) => {
  const { register, handleSubmit, reset } = useForm<ITransactions>({
    // resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const wallets = useAppSelector(
    (store) => store.user.userData.capital.wallets
  );

  const currentWalletId = (wallet: string) => {
    return wallets.find((item) => wallet === item.walletName);
  };

  const onSubmit: SubmitHandler<ITransactions> = (data) => {
    dispatch(
      userActions.addTransaction({
        ...data,
        id: nanoid(),
        walletId: currentWalletId(data.walletId)?.id,
        type: isSpend ? "витрати" : "прибуток",
        sum: isSpend ? -data.sum : +data.sum,
      })
    );
  };

  let i = 0;

  const SpendingFormBody = (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Дата</Label>
      <Input {...register("createdAt")} defaultValue={localDate} />

      <Label>Рахунок</Label>
      <Select {...register("walletId")}>
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
        content={SpendingFormBody}
      />
    </>
  );
};

export default TransactionForm;

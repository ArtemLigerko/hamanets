import { nanoid } from "@reduxjs/toolkit";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

// import { yupResolver } from "@hookform/resolvers/yup";
// import { revenueCategoryList, spendCategoryList } from "../../lists";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { userActions } from "../../redux/reducers/user";
import { localDate } from "../../services/localDateTime";
import { IWallet } from "../../types";
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

// const Select = styled.select`
//   margin: 0 0 10px 0;
// `;

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

const WalletForm = ({ title, button, isSpend }: ISpendingForm) => {
  const { register, handleSubmit, reset } = useForm<IWallet>({
    // resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const wallets = useAppSelector(
    (store) => store.user.userData.capital.wallets
  );

  const currentWalletId = (wallet: string) => {
    return wallets.find((item) => wallet === item.walletName);
  };

  const onSubmit: SubmitHandler<IWallet> = (data) => {
    dispatch(
      userActions.addWallet({
        ...data,
        id: nanoid(),
        total: data.initialSum,
      })
    );
    // console.log({
    //   ...data,
    //   id: nanoid(),
    //   total: data.initialSum,
    // });
  };

  // let i = 0;

  const AddWalletBody = (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>Дата створення</Label>
      <Input {...register("createdAt")} defaultValue={localDate} />

      <Label>Назва рахунку</Label>
      <Input {...register("walletName")} />

      <Label>Сума на рахунку</Label>
      <Input {...register("initialSum")} />

      <Input type="submit" value="Зберегти" />
    </StyledForm>
  );

  return (
    <>
      <ModalUniversal title={title} button={button} content={AddWalletBody} />
    </>
  );
};

export default WalletForm;

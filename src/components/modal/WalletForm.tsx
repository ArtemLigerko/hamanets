import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorRounded } from "@mui/icons-material";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

// import { yupResolver } from "@hookform/resolvers/yup";
// import { revenueCategoryList, spendCategoryList } from "../../lists";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { userActions } from "../../redux/reducers/user";
import { walletsActions } from "../../redux/reducers/wallets";
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

interface IWalletForm {
  title: string;
  button: string;
}

const schema = yup
  .object()
  .shape({
    // createdAt: yup.date().required(),
    walletName: yup.string().required("Введіть назву рахунку"),
    initialSum: yup
      .number()
      .typeError("Повинно бути число")
      .nullable()
      .min(0, "Сумма повинна бути позитивна чи 0")
      // .round("round")
      .required("Введіть число"),
  })
  .required("hh");

const WalletForm = ({ title, button }: IWalletForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IWallet>({
    resolver: yupResolver(schema),
  });

  const [show, setShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  // const wallets = useAppSelector(
  //   (store) => store.user.userData.capital.wallets
  // );

  // const currentWalletId = (wallet: string) => {
  //   return wallets.find((item) => wallet === item.walletName);
  // };

  const onSubmit: SubmitHandler<IWallet> = (data) => {
    dispatch(
      walletsActions.createWallet({
        ...data,
        id: nanoid(),
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        total: data.initialSum,
      })
    );
    setShow(false);
  };

  // let i = 0;

  const AddWallet = (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* <Label>Дата створення</Label>
      <Input {...register("createdAt")} defaultValue={localDate} type="date" />
    {errors.createdAt && <p>{errors?.createdAt.message}</p>} */}
      <Label>Дата створення: {new Date().toLocaleString()}</Label>

      <Label>Назва рахунку</Label>
      <Input {...register("walletName")} type="text" />
      {errors.walletName && <p>{errors?.walletName.message}</p>}

      <Label>Сума на рахунку</Label>
      <Input {...register("initialSum")} defaultValue={0} />
      {errors.initialSum && <p>{errors?.initialSum.message}</p>}

      <Input type="submit" value="Зберегти" />
    </StyledForm>
  );

  return (
    <>
      <ModalUniversal
        title={title}
        button={button}
        content={AddWallet}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default WalletForm;

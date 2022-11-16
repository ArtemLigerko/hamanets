import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { categoryList } from "../lists";
import { useAppSelector } from "../redux/hooks";
import { localDateTime, localDate, localTime } from "../services/localDateTime";
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

enum CategoryEnum {
  foods = "продукти",
  utilities = "комунальні послуги",
  clothes = "одежа",
  shoes = "обув",
  hygiene = "гігієна",
  chemicals = "побутова хімія",
}

interface IFormInput {
  date: string | any;
  account: string;
  category: CategoryEnum;
  sum: number;
}

const SpendingForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const wallets = useAppSelector(
    (store) => store.user.userData.capital.wallets
  );

  let i = 0;

  const SpendingFormBody = (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>Введіть витрати</div>
      <Label>Дата</Label>
      <Input {...register("date")} value={localDate} />

      <Label>Рахунок</Label>
      <Select {...register("account")}>
        {wallets.map((wallet: any) => {
          return <option key={wallet.id}>{wallet.walletName}</option>;
        })}
      </Select>

      <Label>Стаття</Label>
      <Select {...register("category")}>
        {categoryList.map((category) => {
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
        title="Введіть витрати"
        button="Add Spend"
        content={SpendingFormBody}
      />
    </>
  );
};

export default SpendingForm;

import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import ModalUniversal from "./ModalUniversal";
import { StyledButton } from "./TransactionsTools";

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
  clothes = "Одежа",
  foods = "Продукти",
}

interface IFormInput {
  date: string | any;
  account: string;
  category: CategoryEnum;
  sum: number;
}

// const newDate = new Date();

const SpendingForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const SpendingFormContainer = (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>Введіть витрати</div>
      <Label>Дата</Label>
      <Input {...register("date")} />

      <Label>Рахунок</Label>
      <Select {...register("account")}>
        <option value="Картка">Картка</option>
        <option value="Готівка">Готівка</option>
      </Select>

      <Label>Стаття</Label>
      <Select {...register("category")}>
        <option>Одежа</option>
        <option>Продукти</option>
      </Select>

      <Label>Сума</Label>
      <Input {...register("sum")} />

      <Input type="submit" />
    </StyledForm>
  );

  return (
    <>
      <ModalUniversal
        title="Введіть витрати"
        button="Add Spend"
        content={SpendingFormContainer}
      />
    </>
  );
};

export default SpendingForm;

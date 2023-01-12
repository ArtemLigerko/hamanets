import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const Main = styled.main`
  /* background-color: #00000045; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: #a8e2fd;
  display: flex;
  flex-direction: column;
  width: 300px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  padding: 5px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
  /* margin-bottom: 10px; */
`;

const Label = styled.label`
  /* margin: 0 5px; */
`;

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Authorization = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label>Ваше ім'я</Label>
          <Input defaultValue="test" {...register("example")} />
        </Field>

        <Field>
          <Input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        </Field>

        <Field>
          <Input type="submit" />
        </Field>
      </Form>
    </Main>
  );
};

export default Authorization;

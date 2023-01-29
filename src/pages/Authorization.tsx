import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const Main = styled.main`
  background-color: #00000035;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: #ffffff;
  /* display: flex; */
  /* flex-direction: column; */
  padding: 15px;
  width: 400px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin: 10px 0;
`;

const StyledText = styled(Text)`
  margin: 0 30px;
`;

type Inputs = {
  username: string;
  password: string;
};

const Authorization = () => {
  const [submit, setSubmit] = useState("login");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("username")); // watch input value by passing the name of it

  return (
    <>
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <Text fontSize="4xl">Welcome!</Text> */}
          <FormControl>
            <InputWrapper>
              <FormLabel>Name</FormLabel>
              <Input id="login" type="text" {...register("username")} />
              <FormHelperText>Enter your name</FormHelperText>
            </InputWrapper>
            <InputWrapper>
              <FormLabel>Password</FormLabel>
              <Input
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
              <FormHelperText>Enter password</FormHelperText>
            </InputWrapper>
          </FormControl>
          <ButtonWrapper>
            <StyledButton
              colorScheme="blue"
              type="submit"
              onClick={() => setSubmit("login")}
            >
              Login
            </StyledButton>
            <StyledText>or</StyledText>
            <StyledButton
              colorScheme="blue"
              variant="outline"
              type="submit"
              onClick={() => setSubmit("register")}
            >
              Register
            </StyledButton>
          </ButtonWrapper>
        </Form>
      </Main>
    </>
  );
};

export default Authorization;

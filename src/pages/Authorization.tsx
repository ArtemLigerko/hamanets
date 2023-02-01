import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";

const ButtonStyle = {
  width: "100%",
  margin: "10px 0",
};

type Inputs = {
  username: string;
  password: string;
};

const Authorization = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const onSubmitLogin: SubmitHandler<Inputs> = (data) => {
    dispatch(userActions.login(data));
  };

  const onSubmitRegister: SubmitHandler<Inputs> = (data) => {
    dispatch(userActions.registration(data));
  };

  return (
    <>
      <Flex align="center" justify="center" w="100%" h="100vh" bg="gray.50">
        <Box
          as="form"
          // onSubmit={handleSubmit(onSubmit)}
          boxShadow="2xl"
          p="4"
          rounded="lg"
          bg="white"
          w="400px"
        >
          <FormControl>
            <Box mb="30px">
              <FormLabel>Name</FormLabel>
              <Input id="login" type="text" {...register("username")} />
              <FormHelperText>Enter your name</FormHelperText>
            </Box>
            <Box mb="30px">
              <FormLabel>Password</FormLabel>
              <Input
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
              <FormHelperText>Enter password</FormHelperText>
            </Box>
          </FormControl>
          <Flex direction="column" align="center">
            <Button
              sx={ButtonStyle}
              colorScheme="blue"
              type="submit"
              onClick={handleSubmit(onSubmitLogin)}
            >
              Login
            </Button>
            <Text>or</Text>
            <Button
              sx={ButtonStyle}
              variant="outline"
              colorScheme="blue"
              type="submit"
              onClick={handleSubmit(onSubmitRegister)}
            >
              Register
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Authorization;

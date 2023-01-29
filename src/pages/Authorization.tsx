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
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
      <Flex align="center" justify="center" height="100vh" bg="gray.50">
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
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
              w="100%"
              my="10px"
              colorScheme="blue"
              type="submit"
              onClick={() => setSubmit("login")}
            >
              Login
            </Button>
            <Text>or</Text>
            <Button
              w="100%"
              my="10px"
              colorScheme="blue"
              variant="outline"
              type="submit"
              onClick={() => setSubmit("register")}
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

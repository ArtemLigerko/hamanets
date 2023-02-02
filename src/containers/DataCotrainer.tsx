import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const DataContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flex
        justify="center"
        align="flex-start"
        w="100%"
        h="100vh"
        p="10px"
        // background="gray.100"
      >
        {children}
      </Flex>
    </>
  );
};

export default DataContainer;

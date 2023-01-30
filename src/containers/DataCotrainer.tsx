import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const DataContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flex justify="center" w="100%" p="10px">
        {children}
      </Flex>
    </>
  );
};

export default DataContainer;

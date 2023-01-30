import { Box, Flex, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const ToolsContainer = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      align="center"
      border="1px"
      borderColor="gray.200"
      bg="blue.100"
      py="1"
    >
      <Text mx="3">Toolsbar</Text>
      <Box>{children}</Box>
    </Flex>
  );
};

export default ToolsContainer;

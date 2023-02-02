import { Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

const Layout: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <Flex w="100%" h="100vh" direction="column">
        <NavBar />
        <Flex direction="column">
          <Outlet />
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";

const NavBar = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const navLink = {
    fontSize: "md",
    display: "flex",
    alignItems: "center",
    h: "40px",
    px: "5px",
    textDecoration: "none",
    _hover: {
      bg: "gray.400",
      color: "black",
    },
    _active: {
      bg: "green",
      color: "white",
    },
    // _visited: {
    //   bg: "green",
    //   color: "white",
    // },
  };

  const authUser = useAppSelector((store) => store.user.authUser.username);

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        position="fixed"
        top="0"
        zIndex="1"
        w="100%"
        h="40px"
        bg="black"
        color="white"
        m="0"
        p="0"
      >
        <Breadcrumb as="div" separator="" ml="5" textDecoration="none">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" sx={navLink}>
              <Text>Рахунки</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/transactions" sx={navLink}>
              <Text>Транзакції</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/report" sx={navLink}>
              <Text>Звіти</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex align="center">
          <Text mr="5">{authUser}</Text>
          <Button
            as={Link}
            sx={navLink}
            to="/"
            // size="sm"
            mr="8"
            bg=""
            borderRadius="0"
            // colorScheme="blue"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;

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

  const authUser = useAppSelector((store) => store.user.authUser.username);

  return (
    <>
      <Flex align="center" justify="space-between">
        <Breadcrumb separator="-" my="1" ml="5">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              <Text fontSize="2xl">Рахунки</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/transactions">
              <Text fontSize="2xl">Транзакції</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/report">
              <Text fontSize="2xl">Звіти</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex align="center">
          <Text mr="5">{authUser}</Text>
          <Button
            as={Link}
            to="/"
            size="sm"
            mr="8"
            colorScheme="blue"
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

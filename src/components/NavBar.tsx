import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Flex align="center" justify="space-between">
        <Breadcrumb separator="-" my="1" ml="5">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/wallets">
              <Text fontSize="2xl">Гаманці</Text>
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
          <Text mr="5">Username</Text>
          <Button size="sm" mx="2" colorScheme="blue">
            Logout
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;

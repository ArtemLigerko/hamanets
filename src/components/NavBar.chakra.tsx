import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBreadcrumb = styled(Breadcrumb)`
  display: flex;
  align-items: center;
`;
const StyledBreadcrumbItem = styled(BreadcrumbItem)`
  /* margin: 10px; */
  font-size: 1rem;
`;

const NavBarchakra = () => {
  return (
    <>
      <StyledBreadcrumb separator="-">
        <StyledBreadcrumbItem>
          <BreadcrumbLink as={Link} to="/wallets">
            {/* <Text fontSize="4xl">Гаманці</Text> */}
            Гаманці
          </BreadcrumbLink>
        </StyledBreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/transactions">
            Транзакції
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/report">
            Звіти
          </BreadcrumbLink>
        </BreadcrumbItem>
      </StyledBreadcrumb>
    </>
  );
};

export default NavBarchakra;

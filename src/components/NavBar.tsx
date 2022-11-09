import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  padding: 0 60px;
`;

const NavBar = () => {
  return (
    <>
      <StyledNavbar bg="light" expand="sm" sticky="top">
        <Container fluid>
          <Span>
            <Navbar.Brand as={Link} to="/">
              Hamanec
            </Navbar.Brand>
          </Span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" defaultActiveKey="/">
              <Nav.Link as={Link} to="/">
                Транзакції
              </Nav.Link>
              <Nav.Link as={Link} to="/accounts">
                Гаманці
              </Nav.Link>
              <Nav.Link as={Link} to="/report">
                Звіти
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default NavBar;

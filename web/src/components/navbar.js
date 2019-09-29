import React from 'react';
import { Button, ButtonToolbar, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="light" variant="light">
    <Navbar.Brand href="#home">행복</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">이</Nav.Link>
      <Nav.Link href="#features">쁘</Nav.Link>
      <Nav.Link href="#pricing">지?</Nav.Link>
    </Nav>
  </Navbar>
  );
};

export default NavBar;
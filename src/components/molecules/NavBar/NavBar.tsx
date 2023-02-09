import React from "react";
import { NavLink } from "react-router-dom";
import { Container, LogoNavBar, Menu } from "./style";

const NavBar = () => {
  return (
    <Container>
      <LogoNavBar>
        <NavLink to="/">Old Games</NavLink>
      </LogoNavBar>
    </Container>
  );
};

export default NavBar;

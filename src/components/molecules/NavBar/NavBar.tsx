import React from "react";
import { NavLink } from "react-router-dom";
import { Container, LogoNavBar, Menu } from "./style";

const NavBar = () => {
  return (
    <Container>
      <LogoNavBar>
        <NavLink to="/">Old Games</NavLink>
      </LogoNavBar>
      <Menu>
        <ul>
          <li>
            <NavLink to="/login">Entrar</NavLink>
          </li>
          <li>
            <NavLink to="/login">Cadastre-se</NavLink>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default NavBar;

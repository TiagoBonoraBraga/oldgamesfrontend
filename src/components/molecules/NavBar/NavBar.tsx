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
            <NavLink to="/auth">Entrar</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Cadastre-se</NavLink>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default NavBar;

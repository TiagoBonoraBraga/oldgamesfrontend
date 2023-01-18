import React from "react";
import { NavLink } from "react-router-dom";
import { Container, LogoNavBar, Menu } from "../NavBar/style";

const NavBarAdm = () => {
  return (
    <Container>
      <LogoNavBar>
        <NavLink to="/">Old Games</NavLink>
      </LogoNavBar>
      <Menu>
        <ul>
          <li>
            <NavLink to="/">Perfil</NavLink>
          </li>
          <li>
            <NavLink to="/">Adicionar</NavLink>
          </li>
          <li>
            <NavLink to="/">Cadastrar-se</NavLink>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default NavBarAdm;

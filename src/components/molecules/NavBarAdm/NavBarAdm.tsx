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
          {/* <li>
            <NavLink to="/perfil">Perfil</NavLink>
          </li> */}
          <li>
            <NavLink to="/creategame">Criar Novos Games</NavLink>
          </li>
          {/* <li>
            <NavLink to="/createUser">Cadastrar-se</NavLink>
          </li> */}
        </ul>
      </Menu>
    </Container>
  );
};

export default NavBarAdm;

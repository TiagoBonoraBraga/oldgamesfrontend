import React from "react";
import { NavLink } from "react-router-dom";
import { Container, LogoNavBar, Menu } from "../NavBar/style";

const NavBarAdm = () => {
  return (
    <Container>
      <LogoNavBar>
        <NavLink to="/homepage">Old Games</NavLink>
      </LogoNavBar>
      <Menu>
        <ul>
          <li>
            <NavLink to="/homepage">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/profiles">PROFILES</NavLink>
          </li>
          <li>
            <NavLink to="/createprofile"> CRIAR PROFILES</NavLink>
          </li>
          <li>
            <NavLink to="/creategame">CRIAR NOVOS GAMES</NavLink>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default NavBarAdm;

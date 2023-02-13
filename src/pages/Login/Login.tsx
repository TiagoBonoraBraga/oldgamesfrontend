import React from "react";
import BoxLogin from "../../components/molecules/BoxLogin/BoxLogin";
import { BoxAdm } from "../Users/CreateUsers/style";
import { StyledLoginPage } from "./styles";

const Login = () => {
  return (
    <StyledLoginPage>
      <BoxLogin />
    </StyledLoginPage>
  );
};

export default Login;

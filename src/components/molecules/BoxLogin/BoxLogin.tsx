import { FormEvent, useState } from "react";
import { CadastroBtn, LoginForm, StyledForm } from "./styles";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { api } from "../../../utils/api/api";
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest } from "../../../utils/types/requests";

const BoxLogin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginPayload: LoginRequest = {
      Email: e.currentTarget.email.value,
      Password: e.currentTarget.password.value,
    };
    // console.log(loginPayload);
    const userData = await api.login(loginPayload);
    localStorage.setItem("userId", userData.user.id);
    // console.log(`userId localStorage: ${localStorage.getItem("userId")}`)

    console.log(userData);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/homepage");
  }

  return (
    <LoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit}>
        <input placeholder="Seu E-mail" name="email" required />
        <div>
          <input
            placeholder="Sua Senha"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <button onClick={handleShowPassword}>
            {showPassword ? (
              <BsFillEyeSlashFill size={25} />
            ) : (
              <BsFillEyeFill size={25} />
            )}
          </button>
        </div>
        <button type="submit">Login</button>
      </StyledForm>
      <Link to={"/createuser"}>
        <CadastroBtn>Cadastre-se</CadastroBtn>
      </Link>
    </LoginForm>
  );
};

export default BoxLogin;

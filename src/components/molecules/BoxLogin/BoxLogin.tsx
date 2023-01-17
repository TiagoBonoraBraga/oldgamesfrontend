import { FormEvent } from "react";
import { LoginForm, StyledForm } from "./styles"

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const loginPayload = {
     email: e.currentTarget.email.value,
     password: e.currentTarget.password.value,
  }
  console.log(loginPayload);

}

const BoxLogin = () => {
  return (
    <LoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit}>
        <input placeholder="Seu E-mail" name="email"/>
        <input placeholder="Sua Senha" name="password"/>
        <button type="submit">Login</button>
      </StyledForm>
    </LoginForm>
  )
}

export default BoxLogin

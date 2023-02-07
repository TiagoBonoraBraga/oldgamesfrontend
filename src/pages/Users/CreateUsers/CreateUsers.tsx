import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, InputProps } from "../../../components/atoms/form/form";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";

const CreateUsers = () => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const FormInputsUser: InputProps[] = [
    {
      name: "Name",
      type: "text",
      placeholder: "Nome do usuário",
    },
    {
      name: "Email",
      type: "text",
      placeholder: "Digite seu e-mail",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Digite sua senha",
    },
    {
      name: "CPF",
      type: "text",
      placeholder: "CPF do usuário",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const dataPayload = {
      Name: e.currentTarget.Name.value,
      Email: e.currentTarget.Email.value,
      Password: e.currentTarget.Password.value,
      CPF: e.currentTarget.CPF.value
    }
    // console.log(dataPayload)

    const data = await api.createUser(dataPayload);
    // console.log(data)
    if(!data){
      setError(true);
      return;
    } else{
      navigate("/");
    }
  }

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <Form
          inputs={FormInputsUser}
          onSubmit={handleSubmit}
          title={"Create User"}
        ></Form>
      </main>
    </>
  );
};

export default CreateUsers;

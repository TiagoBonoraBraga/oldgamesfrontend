import React, { useState } from "react";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { Form, InputProps } from "../../../components/atoms/form/form";
import { api } from "../../../utils/api/api";
import { CreateProfileRequest } from "../../../utils/types/requests";
import { useNavigate } from "react-router-dom";

const CreateProfileForm = () => {
  const ProfileFormInputs: InputProps[] = [
    {
      name: "Title",
      type: "text",
      placeholder: "Nome do usuário",
    },
    {
      name: "ImageURL",
      type: "text",
      placeholder: "Link da imagem",
    },
  ];
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userPayload: CreateProfileRequest = {
      Title: e.currentTarget.Title.value,
      ImageURL: e.currentTarget.ImageURL.value,
    };

    const response = await api.createNewProfile(userPayload);

    if (!response) {
      setError(true);
      return;
    }
    navigate("/profiles");
  }

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <Form
          inputs={ProfileFormInputs}
          title={"Cadastre seu Profile"}
          onSubmit={handleSubmit}
        />
      </main>
    </>
  );
};

export default CreateProfileForm;

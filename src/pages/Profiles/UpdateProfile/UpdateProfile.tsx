import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, InputProps } from "../../../components/atoms/form/form";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";
import { Profile } from "../../../utils/types/requests";

export interface UpdateProfileFormProps {
  profile: Profile;
}
const UpdateProfile = ({ profile }: UpdateProfileFormProps) => {
  const { id } = useParams();
  const navigate = useNavigate()

  const ProfileFormInputs: InputProps[] = [
    {
      name: "Title",
      type: "text",
      placeholder: "Nome do usuário",
      defaultValue: profile.Title,
    },
    {
      name: "ImageURL",
      type: "text",
      placeholder: "Link da imagem",
      defaultValue: profile.ImageURL,
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const editPayload = {
      id: id ?? "",
      Title: e.currentTarget.Title.value,
      ImageURL: e.currentTarget.ImageURL.value
  };
 
  const userData = await api.updateProfile(editPayload)

  navigate('/profiles')
  }

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <Form
          inputs={ProfileFormInputs}
          onSubmit={handleSubmit}
          title={"Update Profile"}
        />
      </main>
    </>
  );
};

export default UpdateProfile;

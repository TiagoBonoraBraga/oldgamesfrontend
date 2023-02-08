import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";

const UpdateProfile = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const updatePayload = {
      id: id ?? "",
      Title: e.currentTarget.Title.value,
      ImageURL: e.currentTarget.ImageURL.value,
    }

    // console.log(updatePayload)

    const updateData = await api.updateProfile(updatePayload);

    navigate("/profiles")
  }

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <div className="update_container">
          <form onSubmit={handleSubmit}>
            <h2>Update Profile</h2>
            <input type="text" name="Title" placeholder="Digite seu Nome" />
            <input type="text" name="ImageURL" placeholder="Link da imagem" />
            <button type="submit">Update Profile</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default UpdateProfile;

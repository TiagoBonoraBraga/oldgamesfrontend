import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";

const UpdateProfile = () => {
  const [profile, setProfile] = useState<string>();

  const { id } = useParams();
  const navigate = useNavigate();

  //fazer pela rota auth o getbyid fazendo o find pois a api retorna uma lista por isso do find
  async function getProfileById() {
    const user = await api.getAuth();
    const profiles = await api.getProfile(user.id ?? "");
    const selectedProfile = profiles.find((profile: any) => profile.id === id);
    setProfile(selectedProfile);
    console.log(selectedProfile);
  }

  useEffect(() => {
    getProfileById();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const updatePayload = {
      id: id ?? "",
      Title: e.currentTarget.Title.value,
      ImageURL: e.currentTarget.ImageURL.value,
    };

    // console.log(updatePayload)

    const updateData = await api.updateProfile(updatePayload);

    navigate("/profiles");
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
            <input
              type="text"
              name="Title"
              placeholder="Digite seu Nome"
              defaultValue={profile?.Title}
            />
            <input
              type="text"
              name="ImageURL"
              placeholder="Link da imagem"
              defaultValue={profile?.ImageURL}
            />
            <button type="submit">Update Profile</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default UpdateProfile;

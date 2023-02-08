import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";
import { Profile } from "../../../utils/types/requests";
import { CardProfiles, ButtonProfile } from "./style";

type ProfileProps = {
  profile: Profile;
  handleControl: () => void;
};
const CardProfile = ({ profile, handleControl }: ProfileProps) => {
  const navigate = useNavigate()

  async function handleDeleteProfile() {
    await api.deleteProfile(profile.id);
    handleControl();
  }

 

  return (
    <CardProfiles>
      <div>
        <img src={profile.ImageURL} alt="profileImg" />
      </div>
      <h2>{profile.Title}</h2>
      <ButtonProfile>
        <button onClick={handleDeleteProfile}>Deletar</button>
        <button onClick={() => {navigate('/updateprofile/' + profile.id)}}>Editar</button>
      </ButtonProfile>
    </CardProfiles>
  );
};

export default CardProfile;

import React from 'react'
import { api } from '../../../utils/api/api';
import {Profile} from '../../../utils/types/requests'

type ProfileProps = {
    profile: Profile;
    handleControl: () => void;
}
const CardProfile = ({profile, handleControl}: ProfileProps ) => {

  async function handleDeleteProfile() {
    await api.deleteProfile(profile.id);
    handleControl();
  }
  
  return (
    <div>
      <div>
        <img src={profile.ImageURL} alt="profileImg" />
      </div>
      <h2>{profile.Title}</h2>
      <button onClick={handleDeleteProfile}>Deletar</button>
      <button>Editar</button>
    </div>
  )
}

export default CardProfile

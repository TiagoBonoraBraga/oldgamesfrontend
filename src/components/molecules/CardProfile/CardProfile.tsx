import React from 'react'
import {Profile} from '../../../utils/types/requests'

type ProfileProps = {
    profile: Profile;
}
const CardProfile = ({profile}: ProfileProps ) => {
  return (
    <div>
      <div>
        <img src={profile.ImageURL} alt="profileImg" />
      </div>
      <h2>{profile.Title}</h2>
      {/* <button>Editar</button> */}
    </div>
  )
}

export default CardProfile

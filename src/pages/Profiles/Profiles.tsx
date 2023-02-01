import React, { useEffect, useState } from "react";
import CardProfile from "../../components/molecules/CardProfile/CardProfile";
import NavBarAdm from "../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../utils/api/api";
import { Profile } from "../../utils/types/requests";

const Profiles = () => {
  const [profileList, setProfileList] = useState<Profile[]>([]);

  async function AddProfiles() {
    const userId: string | null = localStorage.getItem('userId')
    console.log(`userId: ${userId}`)
    const profiles = await api.getProfile(userId);
    setProfileList(profiles);
  }

  useEffect(() => {
    AddProfiles();
  },[]);

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <div>
          {profileList.map((profile) => (
            <CardProfile profile={profile}  key={profile.id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Profiles;

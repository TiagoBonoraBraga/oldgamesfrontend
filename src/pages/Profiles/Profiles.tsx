import React, { useEffect, useState } from "react";
import CardProfile from "../../components/molecules/CardProfile/CardProfile";
import { BoxProfiles } from "../../components/molecules/CardProfile/style";
import NavBarAdm from "../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../utils/api/api";
import { Profile } from "../../utils/types/requests";

const Profiles = () => {
  const [profileList, setProfileList] = useState<Profile[]>([]);
  const [control, setControl] = useState<boolean>(false);

  async function AddProfiles() {
    const userId: string | null = localStorage.getItem("userId");

    const profiles = await api.getProfile(userId);
    setProfileList(profiles);
  }

  function handleControl() {
    setControl(!control);
  }

  useEffect(() => {
    AddProfiles();
  }, [control]);

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <BoxProfiles>
          {profileList.map((profile) => (
            <CardProfile
              profile={profile}
              key={profile.id}
              handleControl={handleControl}
            />
          ))}
        </BoxProfiles>
      </main>
    </>
  );
};

export default Profiles;

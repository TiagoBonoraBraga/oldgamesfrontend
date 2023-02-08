import React, { useState } from "react";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";
import { useNavigate, useParams } from "react-router-dom";


const UpdateGames = () => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const { id } = useParams();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const dataPayload = {
      id: id ?? "",
      Title: e.currentTarget.Title.value,
      CoverImageUrl: e.currentTarget.CoverImageUrl.value,
      Description: e.currentTarget.Description.value,
      Year: parseInt(e.currentTarget.Year.value),
      ImdbScore: parseFloat(e.currentTarget.ImdbScore.value),
      TrailerYouTubeUrl: e.currentTarget.TrailerYouTubeUrl.value,
      GameplayYouTubeUrl: e.currentTarget.GameplayYouTubeUrl.value,
      genres: [e.currentTarget.genres.value],
    };
    console.log(dataPayload);

    const gameData = await api.updateGame(dataPayload);

    // if (!gameData) {
    //   setError(true);
    //   return;
    // }
    navigate("/homepage");
  }

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <div className="updategame_container">
          <form onSubmit={handleSubmit}>
            <h2>Update Game</h2>
            <input type="text" name="Title" placeholder="Digite o nome do game"/>
            <input type="text" name="Description" placeholder="Digite a descrição do game"/>
            <input type="text" name="Year" placeholder="Digite o ano de lançamento do game"/>
            <input type="text" name="ImdbScore" placeholder="Digite o Score do game (0-5)pontos"/>
            <input type="text" name="TrailerYouTubeUrl" placeholder="Link trailer do Youtube"/>
            <input type="text" name="GameplayYouTubeUrl" placeholder="Link do GamePlay"/>
            <input type="text" name="CoverImageUrl" placeholder="Link da image do game"/>
            <input type="text" name="genres" placeholder="Gênero"/>
            <button type="submit">Update Game</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default UpdateGames;

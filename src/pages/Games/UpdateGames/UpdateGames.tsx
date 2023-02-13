import React, { useEffect, useState } from "react";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";
import { useNavigate, useParams } from "react-router-dom";
import { FormContainer } from "./style";
import {Game} from '../../../utils/types/data'


const UpdateGames = () => {
  const [error, setError] = useState<boolean>(false);
  const [game, setGame] = useState<Game>();
  const navigate = useNavigate();

  const { id } = useParams();

  async function getGameById() {
    const game = await api.getGameById(id ?? "");
    setGame(game);
    console.log(game);
  }

  useEffect(() => {
    getGameById();
  }, []);

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

    navigate("/homepage");
  }

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <FormContainer>
          <h2>Update Game</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Title"
              placeholder="Digite o nome do game"
              defaultValue={game?.Title}
            />
            <input
              type="text"
              name="Description"
              placeholder="Digite a descrição do game"
              defaultValue={game?.Description}
            />
            <input
              type="text"
              name="Year"
              placeholder="Digite o ano de lançamento do game"
              defaultValue={game?.Year}
            />
            <input
              type="text"
              name="ImdbScore"
              placeholder="Digite o Score do game (0-5)pontos"
              defaultValue={game?.ImdbScore}
            />
            <input
              type="text"
              name="TrailerYouTubeUrl"
              placeholder="Link trailer do Youtube"
              defaultValue={game?.TrailerYouTubeUrl}
            />
            <input
              type="text"
              name="GameplayYouTubeUrl"
              placeholder="Link do GamePlay"
              defaultValue={game?.GameplayYouTubeUrl}
            />
            <input
              type="text"
              name="CoverImageUrl"
              placeholder="Link da image do game"
              defaultValue={game?.CoverImageUrl}
            />
            <input
              type="text"
              name="genres"
              placeholder="Gênero"
              defaultValue={game?.genres}
            />
            <button type="submit">Update Game</button>
          </form>
        </FormContainer>
      </main>
    </>
  );
};

export default UpdateGames;

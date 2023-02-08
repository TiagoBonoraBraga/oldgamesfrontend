import React, { useState } from "react";
import { Form, InputProps } from "../../../components/atoms/form/form";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";
// import { UpdateGameRequest } from "../../../utils/types/requests";
import { useNavigate, useParams } from "react-router-dom";
import { Game } from "../../../utils/types/data";

export interface UpdateGameFormProps {
  game:  Game ;
  
}

const UpdateGames = ({game}: UpdateGameFormProps) => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const {id} = useParams();
 

  const FormInputs: InputProps[] = [
    {
      name: "Title",
      type: "text",
      placeholder: "Nome do game",
      defaultValue: game.Title,
    },
    {
      name: "Description",
      type: "text",
      placeholder: "Adicione a descrição do game",
      defaultValue: game.Description,
    },
    {
      name: "Year",
      type: "text",
      placeholder: "Data de lançamento",
      defaultValue: game.Year,
    },
    {
      name: "ImdbScore",
      type: "text",
      placeholder: "Nota de Avaliação do game: (0 - 5) PONTOS",
      defaultValue: game.ImdbScore,
    },
    {
      name: "TrailerYouTubeUrl",
      type: "text",
      placeholder: "Trailer Youtube link",
      defaultValue: game.TrailerYouTubeUrl,
    },
    {
      name: "GameplayYouTubeUrl",
      type: "text",
      placeholder: "Trailer GamePlay",
      defaultValue: game.GameplayYouTubeUrl,
    },
    {
      name: "genres",
      type: "text",
      placeholder: "Gênero do Game",
      defaultValue: game.genres,
    },
    {
      name: "CoverImageUrl",
      type: "text",
      placeholder: "link - Imagem do game",
      defaultValue: game.CoverImageUrl,
    },
  ];
console.log(game.Title)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const dataPayload = {
      
      Title: e.currentTarget.Title.value,
      CoverImageUrl: e.currentTarget.CoverImageUrl.value,
      Description: e.currentTarget.Description.value,
      Year: parseInt(e.currentTarget.Year.value),
      ImdbScore: parseFloat(e.currentTarget.ImdbScore.value),
      TrailerYouTubeUrl: e.currentTarget.TrailerYouTubeUrl.value,
      GameplayYouTubeUrl: e.currentTarget.GameplayYouTubeUrl.value,
      genres: [e.currentTarget.genres.value],
    };
console.log(dataPayload)
   

    const gameData = await api.updateGame({ ...dataPayload, id });
    
    if (!gameData) {
      setError(true);
      return;
    }
    navigate("/homepage");
  }

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <Form
          inputs={FormInputs}
          onSubmit={handleSubmit}
          title={"Update Game"}
        />
      </main>
    </>
  );
};

export default UpdateGames;

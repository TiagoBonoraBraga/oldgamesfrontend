import React, { useState } from "react";
import { Form, InputProps } from "../../../components/atoms/form/form";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../../utils/api/api";
import {  UpdateGameRequest } from "../../../utils/types/requests";
import { useNavigate } from "react-router-dom";
import { Game } from "../../../utils/types/data";

export interface UpdateGameFormProps {
  game: Game;
}



const UpdateGames = ({game}: UpdateGameFormProps) => {

  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

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
    },
    {
      name: "Year",
      type: "text",
      placeholder: "Data de lançamento",
    },
    {
      name: "ImdbScore",
      type: "text",
      placeholder: "Nota de Avaliação do game: (0 - 5) PONTOS",
    },
    {
      name: "TrailerYouTubeUrl",
      type: "text",
      placeholder: "Trailer Youtube link",
    },
    {
      name: "GameplayYouTubeUrl",
      type: "text",
      placeholder: "Trauler GamePlay",
    },
    {
      name: "genres",
      type: "text",
      placeholder: "Gênero do Game",
    },
    {
      name: "CoverImageUrl",
      type: "text",
      placeholder: "link - Imagem do game",
    },
  ];
  
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
    console.log({...dataPayload, id: game.id});
   const gameData = await api.updateGame({...dataPayload, id: game.id});

    if (!gameData) {
      setError(true);
      return;
    }
    
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

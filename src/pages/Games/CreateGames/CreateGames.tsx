import React, { useState } from "react";
import { Form, InputProps } from "../../../components/atoms/form/form";
// import NavBar from "../../../components/molecules/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { CreateGameRequest } from "../../../utils/types/requests";
import { api } from "../../../utils/api/api";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";



const CreateGame = () => {
  const FormInputs: InputProps[] = [
    {
      name: "Title",
      type: "text",
      placeholder: "Nome do game",
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
      placeholder: "Nota de Avaliação do game",
    },
    {
      name: "TrailerYouTubeUrl",
      type: "text",
      placeholder: "Trailer Youtube link",
    },
    {
      name: "GameplayYouTubeUrl",
      type: "text",
      placeholder: "Trailer GamePlay",
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

  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dataPayload: CreateGameRequest = {
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
    const gameData = await api.createNewGame(dataPayload);
   

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
          title={"Create Games"}
        />
      </main>
    </>
  );
};

export default CreateGame;

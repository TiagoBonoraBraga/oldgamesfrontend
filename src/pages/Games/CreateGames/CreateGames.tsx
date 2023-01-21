import React from "react";
import { Form, InputProps } from "../../../components/atoms/form/form";
import NavBar from "../../../components/molecules/NavBar/NavBar";
import { api } from "../../../utils/api/api";

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

// async function CreateNewGame() {
//   const data = await api.createNewGame();
// }

const CreateGame = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Form
          inputs={FormInputs}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.currentTarget);
          }}
          title={"Create Games"}
        />
      </main>
    </>
  );
};

export default CreateGame;

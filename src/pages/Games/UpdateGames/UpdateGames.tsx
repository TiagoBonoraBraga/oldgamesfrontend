import React from "react";
import { Form, InputProps } from "../../../components/atoms/form/form";
import NavBarAdm from "../../../components/molecules/NavBarAdm/NavBarAdm";



const UpdateGames = () => {

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
  
  function handleSubmit() {}

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

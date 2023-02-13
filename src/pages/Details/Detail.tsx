import React, { useEffect, useState } from "react";
import NavBarAdm from "../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../utils/api/api";
import { Game } from "../../utils/types/data";
import { useParams } from "react-router-dom";
import { BoxContent, BoxDetails, BoxInfo, BoxVideos } from "./style";

const Detail = () => {
  const [gameData, setGameData] = useState<Game>({} as Game);

  const { id } = useParams();

  async function getGameData() {
    const data = await api.getGameById(id ?? "");
    setGameData(data);
  }

  useEffect(() => {
    getGameData();
  }, []);

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <BoxDetails>
          <h2>{gameData.Title}</h2>
          <BoxContent>
            <img src={gameData.CoverImageUrl} alt="imagem" />
            <BoxVideos>
              <div className="youtubeVideo">
                <h3>Trailer</h3>
                <iframe
                  width="330"
                  height="215"
                  src={gameData.TrailerYouTubeUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="gameplayVideo">
                <h3>GamePlay</h3>
                <iframe
                  width="330"
                  height="215"
                  src={gameData.GameplayYouTubeUrl}
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </BoxVideos>
          </BoxContent>
          <BoxInfo>
            <p>Descrição: {gameData.Description}</p>
            <span>Ano de Lançamento: {gameData.Year}</span>
            <span>Score - 0/5 pontos: {gameData.ImdbScore} pontos</span>
          </BoxInfo>
        </BoxDetails>
      </main>
    </>
  );
};

export default Detail;

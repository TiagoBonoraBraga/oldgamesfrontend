import React, { useEffect, useState } from "react";
import NavBarAdm from "../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../utils/api/api";
import { Game } from "../../utils/types/data";
import { useParams } from "react-router-dom";



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
        <div className="BoxDetails">
          <h2>{gameData.Title}</h2>
          <img src={gameData.CoverImageUrl} alt="imagem" />
          <div className="gameDescription">
            <p>{gameData.Description}</p>
            <span>{gameData.Year}</span>
            <span>{gameData.ImdbScore}</span>
          </div>
          <div className="gameVideos">
            <div className="youtubeVideo">
              <h3>Trailer</h3>
              <iframe
                width="560"
                height="315"
                src={gameData.TrailerYouTubeUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="gameplayVideo">
              <h3>GamePlay</h3>
              <iframe
                width="560"
                height="315"
                src={gameData.GameplayYouTubeUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Detail;

import React, { useEffect, useState } from "react";
import NavBarAdm from "../../components/molecules/NavBarAdm/NavBarAdm";
import { api } from "../../utils/api/api";
import { Game } from "../../utils/types/data";
import { useParams } from "react-router-dom";

type DetailGameProps = {
  game: Game;
};

// export interface Game {
//   id: string;
//   Title: string;
//   CoverImageUrl: string;
//   Description: string;
//   Year: number;
//   ImdbScore: number;
//   TrailerYouTubeUrl: string;
//   GameplayYouTubeUrl: string;
//   genres: string;
// }
const Detail = ({ game }: DetailGameProps) => {
  const [gameData, setGameData] = useState<Game>();
  

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
          <h2>{game.Title}</h2>
          <img src={game.CoverImageUrl} alt="imagem" />
          <div className="gameDescription">
            <p>{game.Description}</p>
            <span>{game.Year}</span>
            <span>{game.ImdbScore}</span>
          </div>
          <div className="gameVideos">
            <div className="youtubeVideo">
              <h3>Trailer</h3>
              <iframe
                width="560"
                height="315"
                src={game.TrailerYouTubeUrl}
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
                src={game.GameplayYouTubeUrl}
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

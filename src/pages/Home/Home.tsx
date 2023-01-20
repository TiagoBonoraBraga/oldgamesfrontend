import React, { useEffect, useState } from "react";
import NavBar from "../../components/molecules/NavBar/NavBar";
import ProductItem from "../../components/molecules/ProductItem/ProductItem";
import Seek from "../../components/molecules/Seek/Seek";
import { api } from "../../utils/api/api";
import { BoxHome } from "./style";

export type game = {
  id: string;
  title: string;
  CoverImageUrl: string;
};

const Home = () => {
  const [seek, setSeek] = useState("");

  const [games, setGames] = useState<game[]>([]);

  async function Games() {
    const games = await api.getGames();
    setGames(games);
  }

  useEffect(() => {
    Games();
  }, []);

  console.log(games);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <BoxHome>
          <Seek seek={seek} setSeek={setSeek} />
        
          {games.map((game) => (
            <ProductItem key={game.id} game={game} />
          ))}
        </BoxHome>
      </main>
    </>
  );
};

export default Home;

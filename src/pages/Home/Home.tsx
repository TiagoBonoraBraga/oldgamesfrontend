import React, { useEffect, useState } from "react";
// import NavBar from "../../components/molecules/NavBar/NavBar";
import NavBarAdm from "../../components/molecules/NavBarAdm/NavBarAdm";
import ProductItem from "../../components/molecules/ProductItem/ProductItem";
import { api } from "../../utils/api/api";
import CreateGame from "../Games/CreateGames/CreateGames";
import { BoxHome } from "./style";

export type game = {
  id: string;
  Title: string;
  CoverImageUrl: string;
};

const Home = () => {


  const [games, setGames] = useState<game[]>([]);
  const [search, setSearch] = useState("");
  // const [control, setControl] = useState<boolean>(false);

  async function Games() {
    const games = await api.getGames();
    setGames(games);
  }

  const sortedGames =
    search.length > 0
      ? games.filter((game) =>
          game.Title.toLowerCase().includes(search.toLowerCase())
        )
      : games;

    
  // function handleControl() {
  //   setControl(!control);
  // }

  useEffect(() => {
    Games();
  }, []);



  console.log("renderizou");

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <BoxHome>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
            placeholder="Search"
          />

          {sortedGames.map((game) => (
            <ProductItem key={game.id} game={game} />
          ))}

        </BoxHome>
      </main>
    </>
  );
};

export default Home;

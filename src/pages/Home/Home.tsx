import  { useEffect, useState } from "react";
// import NavBar from "../../components/molecules/NavBar/NavBar";
import NavBarAdm from "../../components/molecules/NavBarAdm/NavBarAdm";
import ProductItem from "../../components/molecules/ProductItem/ProductItem";
import { api } from "../../utils/api/api";
// import CreateGame from "../Games/CreateGames/CreateGames";
import { BoxHome, BoxSearch } from "./style";
import { Game } from "../../utils/types/data";
import { useParams } from "react-router-dom";

export type game = {
      id: string;
      Title: string,
      CoverImageUrl: string,
      Description: string,
      Year: number,
      ImdbScore:number,
      TrailerYouTubeUrl: string,
      GameplayYouTubeUrl: string,
      genres:string[],
};

const Home = () => {
  const [games, setGames] = useState<game[]>([]);
  const [search, setSearch] = useState("");
  const [control, setControl] = useState<boolean>(false);
  const [gameData, setGameData] = useState<Game[]>([]);

  async function Games() {
    const games = await api.getGames();
    setGames(games);
  }

  async function getGameData(id: string) {
    const data = await api.getGameById(id);
    setGameData(data);
  }

  // const { id } = useParams();

   function handleControl() {
    setControl(!control);
   }

  const sortedGames =
    search.length > 0
      ? games.filter((game) =>
          game.Title.toLowerCase().includes(search.toLowerCase())
        )
      : games;



  useEffect(() => {
    Games();
    // getGameData("id")
    }, [control]);    

  // useEffect(() => {
  //   getGameData()
  // }, [])

  console.log("renderizou");

  return (
    <>
      <header>
        <NavBarAdm />
      </header>
      <main>
        <BoxSearch>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
            placeholder="Search"
          />
        </BoxSearch>
        <BoxHome>
          {sortedGames.map((game) => (
            
            <ProductItem
              key={game.id}
              game={game}
              handleControl={handleControl}
              
            />
          ))}
        </BoxHome>
      </main>
    </>
  );
};

export default Home;

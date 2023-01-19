import React, { useState } from "react";
import NavBar from "../../components/molecules/NavBar/NavBar";
import ProductItemList from "../../components/molecules/ProductItemList/ProductItemList";
import Seek from "../../components/molecules/Seek/Seek";
import { BoxHome } from "./style";

const Home = () => {
  const [seek, setSeek] = useState("");
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <BoxHome>
          <Seek seek={seek} setSeek={setSeek} />
          <ProductItemList seek={seek} />
        </BoxHome>
      </main>
    </>
  );
};

export default Home;

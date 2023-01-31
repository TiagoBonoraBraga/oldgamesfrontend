import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import CreateGames from "./pages/Games/CreateGames/CreateGames";
import Users from "./pages/Users/Users";
import UpdateGames from "./pages/Games/UpdateGames/UpdateGames";
import { useContext } from "react";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/creategame" element={<CreateGames />} />
        <Route path="/updategame/:id" element={<UpdateGames game={{
          id: "",
          Title: "",
          CoverImageUrl: "",
          Description: "",
          Year: 0,
          ImdbScore: 0,
          TrailerYouTubeUrl: "",
          GameplayYouTubeUrl: "",
          genres: []
        }} />} />
        <Route path="/createUser" element={<Users />} />
        {/* <Route path="/perfil" element={<Perfil />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

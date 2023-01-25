import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import CreateGames from "./pages/Games/CreateGames/CreateGames";
import Perfil from "./pages/Perfil/Perfil";
import UpdateGames from "./pages/Games/UpdateGames/UpdateGames";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/creategame" element={<CreateGames />} />
        <Route
          path="/updategame"
          element={
            <UpdateGames
              game={{
                id: "",
                Title: "",
                CoverImageUrl: "",
                Description: "",
                Year: 0,
                ImdbScore: 0,
                TrailerYouTubeUrl: "",
                GameplayYouTubeUrl: "",
                genres: [],
              }}
            />
          }
        />
        <Route path="/createUser" element={<Perfil />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

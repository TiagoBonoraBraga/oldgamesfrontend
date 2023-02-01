import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import CreateGames from "./pages/Games/CreateGames/CreateGames";
import UpdateGames from "./pages/Games/UpdateGames/UpdateGames";
import Profiles from "./pages/Profiles/Profiles";
import CreateProfile from "./pages/CreateProfile/CreateProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/creategame" element={<CreateGames />} />
        <Route
          path="/updategame/:id"
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
        <Route path="/createProfile" element={<CreateProfile />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

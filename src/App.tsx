import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import CreateGames from "./pages/Games/CreateGames/CreateGames";
import UpdateGames from "./pages/Games/UpdateGames/UpdateGames";
import Profiles from "./pages/Profiles/Profiles";
import CreateProfile from "./pages/Profiles/CreateProfile/CreateProfile";
import CreateUsers from "./pages/Users/CreateUsers/CreateUsers";
import UpdateProfile from "./pages/Profiles/UpdateProfile/UpdateProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/creategame" element={<CreateGames />} />
        <Route path="/updategame/:id" element={<UpdateGames />} />
        <Route path="/createProfile" element={<CreateProfile />} />
        <Route path="/updateProfile/:id" element={<UpdateProfile  />} />
        <Route path="/createuser" element={<CreateUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

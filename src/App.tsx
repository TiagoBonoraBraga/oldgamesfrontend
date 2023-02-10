import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import "./App.css";
import CreateGames from "./pages/Games/CreateGames/CreateGames";
import UpdateGames from "./pages/Games/UpdateGames/UpdateGames";
import Profiles from "./pages/Profiles/Profiles";
import CreateProfile from "./pages/Profiles/CreateProfile/CreateProfile";
import CreateUsers from "./pages/Users/CreateUsers/CreateUsers";
import UpdateProfile from "./pages/Profiles/UpdateProfile/UpdateProfile";
import Detail from "./pages/Details/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/creategame" element={<CreateGames />} />
        <Route path="/updategame/:id" element={<UpdateGames />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/updateprofile/:id" element={<UpdateProfile  />} />
        <Route path="/createuser" element={<CreateUsers />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

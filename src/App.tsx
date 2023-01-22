import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';
import CreateGames from "./pages/Games/CreateGames/CreateGames";

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/homepage" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/creategame" element={<CreateGames />} />                
            </Routes>
        </BrowserRouter>
  );
}

export default App;
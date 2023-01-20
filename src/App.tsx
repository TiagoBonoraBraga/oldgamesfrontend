import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/homepage" element={<Home />} />
                <Route path="/auth" element={<Login />} />
                
            </Routes>
        </BrowserRouter>
  );
}

export default App;
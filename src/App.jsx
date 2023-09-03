import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Inicio } from "./pages/inicio/Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

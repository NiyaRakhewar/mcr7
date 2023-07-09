import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Continents } from "./Continents";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents" element={<Continents />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Country } from "./Country";
import { Destinations } from "./Destinations";
import { DestinationPage } from "./DestinationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<Country />} />
        <Route
          path="/destination/:countryName/:destinationName"
          element={<Destinations />}
        />
        <Route
          path="/destinationpage/:countryName/:destinationName/:id"
          element={<DestinationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

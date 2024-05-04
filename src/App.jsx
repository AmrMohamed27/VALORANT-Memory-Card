import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/fonts/stylesheet.css";
import Home from "./components/homepage/Home";
import GamePage from "./components/game/GamePage";

function App() {
  return (
    <div style={{ fontFamily: "Tungsten" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Mint from "./components/Mint";

function App() {
  return (
    <Router>
      <div className="App overlay moving-background">
        <Routes className="App moving-background">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mint" element={<Mint />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

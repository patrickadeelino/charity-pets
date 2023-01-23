import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Faq from "./components/pages/Faq";
import Mint from "./components/pages/Mint";
import { WalletProvider } from "./context/WalletContext";

function App() {
  return (
    <>
      <WalletProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/mint" exact element={<Mint />} />
            <Route path="/faq" exact element={<Faq />} />
          </Routes>
        </Router>
      </WalletProvider>
    </>
  );
}

export default App;

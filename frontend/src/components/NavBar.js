import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";
import { WalletContext } from "../context/WalletContext";
import { shortenAddress } from "../utils/shortenAddress";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { connectWallet, currentAccount } = useContext(WalletContext);

  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <p>Charity Pets</p> <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            onClick={closeMobileMenu}
            className={click ? "nav-menu active" : "nav-menu"}
          >
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-links" onClick={closeMobileMenu}>
                Sobre o projeto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mint" className="nav-links" onClick={closeMobileMenu}>
                Mint
              </Link>
            </li>
          </ul>
          {!currentAccount && button && (
            <Button buttonStyle="btn--outline" onClick={connectWallet}>
              Conectar
            </Button>
          )}
          {currentAccount && button && (
            <Button buttonStyle="btn--outline" onClick={connectWallet}>
              {shortenAddress(currentAccount)}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;

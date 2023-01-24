import React from "react";
import "../App.css";
import "./WelcomeSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    <div className="hero-container">
      <h1>QUE TAL AJUDAR SUA ONG DE ANIMAIS FAVORITA?</h1>
      <p>
        Em troca, receba um Colecionável Digital e muito mais por apenas 2 MATIC.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn__outline call_to_action"
          buttonSize="btn__large"
        >
          <Link to="/about" className="btns">
            QUERO AJUDAR
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default WelcomeSection;

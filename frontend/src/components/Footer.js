import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <a href="https://www.opensea.io" target="_blank" rel="noreferrer">
              Coleção no OpenSea
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/faq">Perguntas Frequentes</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/terms-of-use">Termos de uso</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Charity Pets
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">Charity Pets © 2023</small>
          <div className="social-icons">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { polygonScanUrl, termsOfUseUrl } from "../utils/externalLinks";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <a
              href="https://opensea.io/collection/charitypets"
              target="_blank"
              rel="noreferrer"
            >
              Coleção no OpenSea
            </a>
            <a href={polygonScanUrl} target="_blank" rel="noreferrer">
              Contrato na Polygonscan
            </a>
            <a
              href="https://github.com/patrickadeelino/charity-pets"
              target="_blank"
              rel="noreferrer"
            >
              Repositório GitHub
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/faq">Perguntas Frequentes</Link>
            <a href={termsOfUseUrl} target="_blank" rel="noreferrer">
              Termos de uso
            </a>
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
          <div className="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

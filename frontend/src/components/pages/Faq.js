import React from "react";
import "./Faq.css";
import { openSeaUrl } from "../../utils/externalLinks";
function Faq() {
  return (
    <li className="faq-items">
      <h1>PERGUNTAS FREQUENTES:</h1>
      <div className="faq-item">
        <p className="faq-question">1) QUEM ORGANIZA ESTA INICIATIVA?</p>
        <p>
          Esta coleção tem caráter escolar, sendo objeto de estudo do Módulo de
          Tokens Não Fungíveis e elaborada por alunos da 1º turma do MBA sobre
          Criptoativos e Blockchain reconhecido pelo Ministério da Educação e
          Cultura (MEC) no Brasil, ministrado pela Universidade Católica de
          Pernambuco, que não tem qualquer responsabilidade direta sobre esta
          coleção.
        </p>
      </div>
      <div>
        <p className="faq-question">2) POR ONDE SERÁ REALIZADO O SORTEIDO?</p>
        <p>Será utilizado o XXXXX</p>
      </div>
      <div>
        <p className="faq-question">
          3) EM QUAL BLOCKCHAIN ESTÁ O CONTRATO INTELIGENTE?
        </p>
        <p>O contrato inteligente está na blockchain da Polygon.</p>
      </div>
      <div>
        <p className="faq-question">3) QUEM É O ARTISTA DAS ARTES?</p>
        <p>
          Todas as artes são geradas por Inteligência Artifical (Midjourney)
          sucedida por cuidadosa curadoria de seleção.
        </p>
      </div>
      <div>
        <p className="faq-question">
          4) QUERIA UM COLECIONÁVEL DO MEU CACHORRO, É POSSÍVEL?
        </p>
        <p>
          A distribuição dos colecionáveis é realizada aleatoriamente.
          Entretanto, você pode tentar negociar um outro de sua preferência no
          mercado secundário, através da{" "}
          <a href={openSeaUrl} target="_blank" rel="noreferrer">
            OpenSea
          </a>
          .
        </p>
      </div>
      <div>
        <p className="faq-question">
          5) ATÉ QUANDO POSSO MARCAR MINHAS REUNIÕES?
        </p>
        <p>Enquanto você possuir o NFT poderá marcar.</p>
      </div>
      <div>
        <p className="faq-question">
          6) CASO O GANHADOR NÃO SE IDENTIFIQUE, O QUE ACONTECERÁ COM O VALOR?
        </p>
        <p>
          Se por algum motivo não for possível identificar o ganhador, a ONG
          será escolhida pelo time de desenvolvimento do projeto. Os resultados
          obtidos serão compartilhados online.
        </p>
      </div>
    </li>
  );
}

export default Faq;

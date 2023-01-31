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
        <p className="faq-question">
          2) EM QUAL BLOCKCHAIN ESTÁ LOCALIZADO E QUAL O ENDEREÇO DO CONTRATO INTELIGENTE?
        </p>
        <p>O contrato inteligente está na blockchain da Polygon e está seu endereço é <a href="https://polygonscan.com/address/0x5335654dDE01A1bF54F7719F13c6580763891c95" target="_blank">0x5335654dDE01A1bF54F7719F13c6580763891c95.</a></p>
      </div>
      <div>
        <p className="faq-question">3) QUAL O PADRÃO DO TOKEN?</p>
        <p>
          ERC-721
        </p>
      </div>
      <div>
        <p className="faq-question">4) ONDE ESTÁ ARMAZENADO OS METADADOS?</p>
        <p>
          Os metadados estão armazenados no IPFS.
        </p>
      </div>
      <div>
        <p className="faq-question">5) QUEM É O ARTISTA DAS ARTES?</p>
        <p>
          Todas as artes são geradas por Inteligência Artifical (Midjourney)
          sucedida por cuidadosa curadoria de seleção.
        </p>
      </div>
      <div>
        <p className="faq-question">
          6) QUERIA UM COLECIONÁVEL DO MEU CACHORRO, É POSSÍVEL?
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
          7) ATÉ QUANDO POSSO MARCAR MINHAS REUNIÕES?
        </p>
        <p>Você poderá utilizar os benefícios enquanto você possuir o NFT.</p>
      </div>
      <div>
        <p className="faq-question">
          8) CASO O GANHADOR NÃO SE IDENTIFIQUE, O QUE ACONTECERÁ COM O VALOR?
        </p>
        <p>
          Se por algum motivo não for possível identificar o ganhador, a ONG
          será escolhida pelo time de desenvolvimento do projeto. Os resultados
          obtidos serão compartilhados online e disponibilizados aqui no site posteriormente.
        </p>
      </div>
    </li>
  );
}

export default Faq;

import React from "react";
import "../../App.css";
import "./About.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import GoogleFormLink from "../GoogleFormLink";
import { Tooltip } from "react-tooltip";

function Home() {
  return (
    <>
      <div id="about" className="cards">
        <div>
          <figure className="cards__pic-wrap">
            <img
              className="cards__item__img"
              src="images/about.jpg"
              alt="Travel"
            />
          </figure>

          <ul className="cards__info">
            <li className="cards__item__info">
              <h1>SOBRE O PROJETO</h1>
              <p>
                Antes de mais nada, parabéns pela sua iniciativa! Infelizmente,
                o abandono de animais é um problema comum no Brasil.
              </p>
              <p>
                Cerca de 7,2 milhões são abandonados anualmente no país, sejam
                cães, gatos ou outros animais de estimação.{" "}
              </p>
              <p>
                ONGs de proteção animal trabalham diariamente para proporcionar
                condições melhores a eles, oferecendo serviços de resgate,
                encaminhamento e adoção, bem como campanhas de conscientização e
                esterilização/castração gratuita. Adquirindo o seu colecionável,
                você tem a chance de incentivar o trabalho de ONGs tão
                comprometidas.
              </p>
              <p></p>
            </li>
            <li className="cards__item__info">
              <h3>COMO VAI FUNCIONAR?</h3>
              <p>
                No dia XXXXXX, após o fim do período de Mint, será feito um
                sorteio on-chain entre os participantes e o dono da carteira que
                detém o colecionável sorteado escolherá para qual instituição o
                valor captado será convertido (para dúvidas, veja a{" "}
                {
                  <Link className="link" to="/faq">
                    FAQ
                  </Link>
                }
                ).
              </p>
              <p>
                A cada colecionável digital que você adquirir, 100% do valor
                obtido será destinado para a ONG de proteção animal escolhida!
              </p>
              <div>
                <Tooltip anchorId="form-link-1" />
                <p>
                  Ou seja, quanto mais colecionáveis você possuir, maiores são
                  as chances de você escolher qual instituição vamos ajudar!
                  Após obter o seu colecionável,{" "}
                  <GoogleFormLink
                    id="form-link-1"
                    className="link"
                    description="acesse a página do Google Forms"
                  />{" "}
                  para indicar qual a instituição de sua preferência.
                </p>
              </div>
            </li>
            <li className="cards_item_info">
              <h3>QUAIS SÃO OS MEUS BENEFíCIOS?</h3>
              <p>
                Sendo sorteado, além de contribuir com a causa animal, você
                ganhará os seguintes benefícios:
              </p>
              <ul className="my-benefits">
                <li>
                  1. Colecionável Digital para você usar nas suas redes sociais
                  e fotos de perfil.
                </li>
                <li>
                  2. Bate papo ao vivo de 1 hora para aprender sobre como ganhar
                  dinheiro e viajar barato com Milhas Aéreas.
                </li>
                <li>
                  3. Bate papo ao vivo de 1 hora para aprender sobre vendas e
                  negociação internacional.
                </li>
                <li>
                  4. Bate papo ao vivo de 1 hora sobre melhores práticas fiscais
                  sobre criptoativos.
                </li>
                <li>
                  5. Bate papo ao vivo de 1 hora de mentoria sobre programação,
                  dúvidas, como ingressar na área, etc.
                </li>
              </ul>
              <i>
                Atenção: Os benefícios poderão ser solicitados pela carteira que possuir o NFT sorteado, não precisa necessariamente ser a carteira que mintou o NFT, isso é, <br />
                caso o NFT ganhador seja adquirido no mercado secundário, o dono terá o direito de utilizar os benefícios.
              </i>
            </li>
            <li className="cards_item_info">
              <h3>FUI SORTEADO, E AGORA?</h3>
              <Tooltip anchorId="form-link-2" />
              <p>
                Entraremos em contato através dos dados preenchidos no{" "}
                <GoogleFormLink
                  id="form-link-2"
                  className="link"
                  description="formulário do Google Forms"
                />{" "}
                para confirmar a ONG escolhida e, depois, compartilharemos aqui
                a comprovação da entrega.
              </p>
              <p>
                A cada colecionável digital que você adquirir, 100% do valor
                obtido será destinado para a ONG de proteção animal escolhida!
              </p>
              <div className="call_to_action">
                <Link to="/mint">GARANTIR MEU COLECIONÁVEL!</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

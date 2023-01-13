import "./../App.css";
import NavBar from "./NavBar";
import { Link } from "@chakra-ui/react";

function Home() {
  return (
    <div>
        <NavBar />
        <div>
          <h1>
            Que tal ajudar sua ONG
            de animais favorita?
          </h1>
          <p>
            Ajude ONGs de animais de estimação comprando NFTs conosco.
            <br /> Ao comprar, você participa de sorteio para escolher a instituição
            a ser beneficiada <br /> e ganha uma foto de perfil de um animal de
            estimação. <br />
          </p>
          <Link cursor="pointer" color="white" padding="5px" backgroundColor="rgb(144, 33, 33)" borderRadius="5px">Entenda como se juntar a nós na causa dos animais...</Link>
        </div>
    </div>
  );
}

export default Home;

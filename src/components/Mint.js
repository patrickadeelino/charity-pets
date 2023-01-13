import './Mint.css'
import { useContext, useState } from "react";
import { ethers, BigNumber } from "ethers";
import robotsNFT from "../RobotsNFT.json";
import { Link, Button, Input } from "@chakra-ui/react";
import { WalletContext } from "../context/WalletContext";
import NavBar from "./NavBar";
const robotsNFTAddress = "0xa06d3e7284f4285a7c4ff4caba45b28eec0a2872";

const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const { currentAccount } = useContext(WalletContext);
  async function handleMint() {
    if (!currentAccount) {
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      robotsNFTAddress,
      robotsNFT.abi,
      signer
    );

    try {
      const response = await contract.mint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther("0.002"),
      });
      console.log("response", response);
    } catch (e) {
      console.log(e);
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;

    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;

    setMintAmount(mintAmount + 1);
  };

  return (
    <div>
      <NavBar />
      <div>
        O custo do mint é de 2.5 MATIC, e todo o dinheiro arrecadado irá para <br /> 
        a instituição escolhida pelo ganhador do sorteio
      </div>
      {currentAccount ? (
        <div className="mint-button-box">
          <div>
            <Button className="mint-button" onClick={handleDecrement}>
              -
            </Button>

            <Input
              className="mint-button"
              textAlign="center"
              value={mintAmount}
              readOnly
            />
            <Button className="mint-button" onClick={handleIncrement}>
              +
            </Button>
            <Button className="mint-button" onClick={handleMint}>
              Mint now
            </Button>
          </div>
        </div>
      ) : (
        <Link backgroundColor="#D6517D" padding="5px 10px" to="/about">
          Conecte sua carteira para poder mintar
        </Link>
      )}
    </div>
  );
};

export default Mint;

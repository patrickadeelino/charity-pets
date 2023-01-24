import React, { useContext, useState } from "react";
import { Button } from "../Button";
import Footer from "../Footer";
import "./Mint.css";
import { BigNumber } from "ethers";
import { WalletContext } from "../../context/WalletContext";
import { TailSpin } from "react-loader-spinner";

const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [mintedSucessfully, setMintedSuccessfully] = useState(false);
  const {
    currentAccount,
    connectWallet,
    connectedContract,
    mintFee,
    currentSupply,
    setCurrentSupply,
    maxSupply,
  } = useContext(WalletContext);

  const handleMint = async () => {
    if (!connectedContract) {
      return;
    }
    try {
      const options = {
        gasLimit: 1000000,
        value: mintFee * mintAmount,
      };
      const response = await connectedContract.mint(
        BigNumber.from(mintAmount),
        options
      );
      setIsLoading(true);
      await response.wait();
      setIsLoading(false);
      setCurrentSupply(currentSupply.add(mintAmount));
      setMintedSuccessfully(true)
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const handleIncrement = () => {
    if (mintAmount === 3) return;

    setMintAmount(mintAmount + 1);
  };

  const handleDecrement = () => {
    if (mintAmount === 1) return;

    setMintAmount(mintAmount - 1);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="images-wrapper">
          <img
            className="header-image"
            src="images/header-image-1.png"
            alt="header-1"
          />
          <img
            className="header-image"
            src="images/header-image-2.png"
            alt="header-2"
          />
        </div>
        <div className="mint-section">
          <p className="mint-info-title">
            Faça o Mint do seu colecionável digital
          </p>

          {currentAccount && (
            <>
              <p className="mint-section-info">{`Já foram mintandos ${currentSupply} colecionáveis dos ${maxSupply} disponíveis.`}</p>
              <div className="mint-button-wrapper">
                {isLoading ? (
                  <TailSpin
                    height="100"
                    width="80"
                    color="#f3f3f3"
                    ariaLabel="tail-spin-loading"
                  />
                ) : (
                  <>
                    <button onClick={handleDecrement}>-</button>
                    <input
                      className="mint-amount-input"
                      value={mintAmount}
                      type="text"
                      readOnly
                    ></input>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleMint}>Mintar</button>
                    <div></div>
                  </>
                )}
              </div>

              {mintedSucessfully &&
                <div className="mint-success-section">
                <p className="mint-section-info">
                  Pronto, seu colecionável já está em sua carteira!
                </p>
                <p className="mint-section-info">
                  <a
                    className="mint-section-info"
                    href="https://testnets.opensea.io/account?search[resultModel]=ASSETS&search[sortBy]=CREATED_DATE&search[sortAscending]=false"
                    target="_blank"
                    rel="noreferrer" 
                  >
                    Clique aqui para ver no Opensea
                  </a>
                </p>
                <p className="mint-section-opensea-note">
                  Obs: Pode demorar alguns minutos para ficar disponível no
                  OpenSea.
                </p>
              </div>
              }
            </>
          )}
          {!currentAccount && (
            <>
              <div className="mint-button-wrapper">
                <Button onClick={connectWallet} buttonStyle="btn--outline">
                  CONECTAR CARTEIRA
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mint;

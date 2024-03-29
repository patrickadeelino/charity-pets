import React, { useContext, useState } from "react";
import { Button } from "../Button";
import Footer from "../Footer";
import "./Mint.css";
import { ethers } from "ethers";
import { WalletContext } from "../../context/WalletContext";
import { TailSpin } from "react-loader-spinner";
import { openSeaUrl } from "../../utils/externalLinks";
import GoogleFormLink from "../GoogleFormLink";

const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [mintedSucessfully, setMintedSuccessfully] = useState(false);
  const {
    currentAccount,
    connectWallet,
    connectedContract,
    currentSupply,
    setCurrentSupply,
    setUserWalletOwnsNFT,
    isConnectedToPolygon,
  } = useContext(WalletContext);

  const mintFee = ethers.utils.parseEther("2");
  const maxSupply = 50;
  const handleMint = async () => {
    if (!connectedContract) {
      return;
    }
    try {
      const options = {
        gasLimit: 1000000,
        value: mintFee.mul(mintAmount),
      };

      const response = await connectedContract.mint(
        mintAmount,
        options
      );
      setIsLoading(true);
      await response.wait();
      setIsLoading(false);
      setCurrentSupply(currentSupply.add(mintAmount));
      setMintedSuccessfully(true);
      setUserWalletOwnsNFT(true);
    } catch (e) {
      console.log('exception', e);
      setIsLoading(false);
    }
  };
  
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  })

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

          {currentAccount && isConnectedToPolygon && (
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

              {mintedSucessfully && (
                <div className="mint-success-section">
                  <p className="mint-section-info">
                    Pronto, seu colecionável já está em sua carteira! <br />
                    Próximos passos:
                  </p>
                  <p className="mint-section-info">
                    <a
                      className="mint-section-info"
                      href={openSeaUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Veja seu colecionável digital no OpenSea
                    </a>
                  </p>
                  <div>
                    <p className="mint-section-info">
                      <GoogleFormLink
                        description="Preencha o formulário para que possamos entrar em contato"
                        className="mint-section-info"
                      />
                    </p>
                  </div>
                </div>
              )}
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

          {currentAccount && !isConnectedToPolygon && (
            <>
              <div className="mint-button-wrapper">
                <p className="mint-info-title">
                  Por favor, conecte-se à rede da Polygon.
                </p>
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

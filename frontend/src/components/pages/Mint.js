import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button";
import Footer from "../Footer";
import "./Mint.css";
import { ethers, BigNumber } from "ethers";
import { WalletContext } from "../../context/WalletContext";
import { TailSpin } from "react-loader-spinner";

const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const { currentAccount, connectWallet, connectedContract } =
    useContext(WalletContext);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSupply, setCurrentSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [mintFee, setMintFee] = useState(0);

  useEffect(() => {
    if (!connectedContract) {
      return;
    }

    (async () => {
      setCurrentSupply(await connectedContract.totalSupply());
      setMaxSupply(await connectedContract.MAX_SUPPLY());
      setMintFee(await connectedContract.MINT_FEE());
    })();
  }, [connectedContract]);

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
      console.log("response", response);
    } catch (e) {
      console.log(e);
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
              <p className="total-mint-counter">{`Já foram mintandos ${currentSupply} colecionáveis dos ${maxSupply} disponíveis.`}</p>
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
                  </>
                )}
              </div>
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

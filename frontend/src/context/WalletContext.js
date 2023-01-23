import charityPetsAddress from "../contract/charityPetsAddress";
import charityPets from "../contract/CharityPets.json";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
export const WalletContext = React.createContext();

const { ethereum } = window;
export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [connectedContract, setConnectContract] = useState(null);

  const checkIfUserHasWallet = async () => {
    if (!ethereum) {
      alert("Please install metamask!");
    }
  };

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts[0]);
  };

  const checkIfWalletIsConnected = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length) {
      console.log("User is connected");
      setCurrentAccount(accounts[0]);
    }
  };
  
  useEffect(() => {
    checkIfUserHasWallet();
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (!currentAccount) {
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      charityPetsAddress,
      charityPets.abi,
      signer
    );
    setConnectContract(contract);
  }, [currentAccount]);
  return (
    <WalletContext.Provider
      value={{ currentAccount, connectWallet, connectedContract }}
    >
      {children}
    </WalletContext.Provider>
  );
};

import React, { useEffect, useState } from "react";
export const WalletContext = React.createContext();

const { ethereum } = window;
export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');

  const checkIfUserHasWallet = async () => {
    if (!ethereum) {
      alert("Please install metamask!");
    }
  };
  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(accounts[0])
  }

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

  return (
    <WalletContext.Provider value={{currentAccount, connectWallet}}>
      {children}
    </WalletContext.Provider>
  );
};

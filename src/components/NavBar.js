import "./NavBar.css";
import React, { useContext } from "react";
import { Box, Button, Flex, Spacer, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";
import { shortenAddress } from "../utils/shortenAddress";
import Opensea from "../assets/social-media-icons/opensea.png";
import Instagram from "../assets/social-media-icons/instagram.png";
const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(WalletContext);

  return (
    <Flex justify="space-between" align="center" padding="30px 40px">
      {/* Social Media Icons */}
      <Flex marginLeft="25%">
        <Link href="https://opensea.io" target="_blank">
          <Image src={Opensea} boxSize="32px" margin="0 25px" />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <Image src={Instagram} boxSize="32px" margin="0 25px" />
        </Link>
      </Flex>
      {/* Sections and Connect */}
      <Flex justify="space-around" className="navbar-option" align="cerightnter" padding="20px 110px">
        <Spacer />
        <Link to="/">
          Home
        </Link>
        <Link to="/mint">
          Mint
        </Link>
        <Link to="/about">
          Sobre o projeto
        </Link>
        {currentAccount ? (
          <Box className="connect-wallet-section">
            {shortenAddress(currentAccount)}
          </Box>
        ) : (
          <Button className="connect-wallet-section" onClick={connectWallet}>
            CONECTAR CARTEIRA
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;

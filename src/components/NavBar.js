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
      <Flex justify="space-around" align="cerightnter" padding="20px 110px">
        <Spacer />
        <Box
          color="rgb(144, 33, 33)"
          fontFamily="Sora"
          padding="4px"
          margin="0 35px"
          cursor="pointer"
        >
          <Link to="/">Home</Link>
        </Box>
        <Box
          color="rgb(144, 33, 33)"
          fontFamily="Sora"
          padding="4px"
          margin="0 35px"
          cursor="pointer"
        >
          <Link to="/about">Sobre o projeto</Link>
        </Box>
        <Box
          color="rgb(144, 33, 33)"
          fontFamily="Sora"
          padding="4px"
          margin="0 35px"
          cursor="pointer"
        >
          <Link to="/mint">Mint</Link>
        </Box>
        {currentAccount ? (
          <Box
            backgroundColor="rgb(144, 33, 33)"
            borderRadius="8px"
            boxShadow="0px 1px 1px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="5px 10px"
            margin="0 15px"
          >
            {shortenAddress(currentAccount)}
          </Box>
        ) : (
          <Button
            backgroundColor="rgb(144, 33, 33)"
            borderRadius="8px"
            boxShadow="0px 1px 1px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="sans-serif"
            fontSize=""
            padding="5px 10px"
            margin="0 15px"
            onClick={connectWallet}
          >
            CONECTAR CARTEIRA
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;

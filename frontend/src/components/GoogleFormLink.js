import React, { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { googleFormUrl } from "../utils/externalLinks";
import "react-tooltip/dist/react-tooltip.css";

const GoogleFormLink = ({ id, description, className }) => {
  const { userWalletOwnsNFT } = useContext(WalletContext);
  if (!userWalletOwnsNFT) {
    return (
      <>
        <span
          id={id}
          className={className}
          data-tooltip-content="Link disponível apenas para holders da NFT CharityPets"
        >
          {description}
        </span>
      </>
    );
  }
  return (
    <a
      href={googleFormUrl}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {description}
    </a>
  );
};

export default GoogleFormLink;

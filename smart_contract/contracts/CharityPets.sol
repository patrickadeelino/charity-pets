// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CharityPets is ERC721URIStorage, Ownable {
    uint256 public immutable MAX_SUPPLY = 50;
    uint256 public immutable MAX_PER_WALLET = 3;
    uint256 public immutable MINT_FEE = 0.002 ether;

    uint256 public totalSupply;
    bool public isPublicMintEnabled;
    string[] internal tokenUris;
    mapping(address => uint256) public walletMints;

    constructor(string[23] memory petsTokensUris) ERC721("CharityPets", "CP") {
        tokenUris = petsTokensUris;
        totalSupply = 0;
    }

    function mint(uint256 amount) public payable {
        require(isPublicMintEnabled, "Minting not enabled");
        require(
            walletMints[msg.sender] + amount <= MAX_PER_WALLET,
            "Exceeded max per wallet"
        );
        require(msg.value >= amount * MINT_FEE, "Not enough ether for mint");
        require(totalSupply + amount <= MAX_SUPPLY, "Sold out");

        for (uint256 i = 0; i < amount; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply = totalSupply + 1;
            walletMints[msg.sender] = walletMints[msg.sender] + 1;
            _safeMint(msg.sender, newTokenId);
            _setTokenURI(newTokenId, tokenUris[newTokenId - 1]);
        }
    }

    function setIsPublicMintEnable(bool isEnabled) external onlyOwner {
        isPublicMintEnabled = isEnabled;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Token does not exist!");

        return super.tokenURI(tokenId);
    }

    function withdraw() external onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");

        require(success, "Withdraw failed!");
    }
}

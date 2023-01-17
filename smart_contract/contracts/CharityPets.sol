// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CharityPets is ERC721URIStorage, Ownable {
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;
    string[] internal i_tokensUris = [""];
    uint256 internal immutable i_mintFee;

    constructor(string[4] memory tokensUris) ERC721("CharityPets", "CP") {
        i_mintFee = 0.002 ether; // MINT_FEE
        i_tokensUris = tokensUris;
        totalSupply = 0; // TOTAL_SUPPLY
        maxSupply = 50;// MAX_SUPPLY
        maxPerWallet = 3; // MAX_PER_WALLET
    }

    function setIsPublicMintEnable(bool isEnabled) external onlyOwner {
        isPublicMintEnabled = isEnabled;
    }

    function setBaseTokenUri(string calldata baseUri) external onlyOwner {
        baseTokenUri = baseUri;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Token does  not exist!");

        return super.tokenURI(tokenId);
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{value: address(this).balance}(
            ""
        );

        require(success, "Withdraw failed!");
    }

    function mint(uint256 amount) public payable {
        require(isPublicMintEnabled, "Minting not enabled");
        require(
            walletMints[msg.sender] + amount <= maxPerWallet,
            "Exceeded max per wallet"
        );
        require(msg.value >= amount * i_mintFee, "Not enough ether for mint");
        require(totalSupply + amount <= maxSupply, "Sold out");

        for (uint256 i = 0; i < amount; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            // walletMints[msg.sender] = walletMints[msg.sender] + 1;
            _safeMint(msg.sender, newTokenId);
            _setTokenURI(newTokenId, i_tokensUris[newTokenId]);
        }
    }
}

const { network, ethers } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");
const {
  storeImages,
  storeTokenUriMetadata,
} = require("../utils/uploadToPinata");
const { verify } = require("../utils/verify");

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
};

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  log("=======================");

  let tokenUris = [];
  if (process.env.UPLOAD_TO_PINATA === "true") {
    tokenUris = await uploadToPinata();
  }

  console.log('Tokensuris', tokenUris);
  const args = [tokenUris];
  const { deployer } = await getNamedAccounts();
  const charityPets = await deploy("CharityPets", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 5,
  });

  log("Deployed to:", charityPets.address);

  log("Verifying on etherscan...");
  await verify(charityPets.address, args);
};

async function uploadToPinata() {
  let tokenUris = [];
  const { responses: imageUploadedResponses, files } = await storeImages(
    "images/"
  );

  console.log(`${imageUploadedResponses.length} image was uploaded to Pinata.`);
  for (let imageUploadedResponseIndex in imageUploadedResponses) {
    console.log(`Uploading metadata ${imageUploadedResponseIndex}`);

    let tokenUriMetadata = { ...metadataTemplate };
    tokenUriMetadata.name = files[imageUploadedResponseIndex].replace(
      ".png",
      ""
    );
    tokenUriMetadata.description = "An adorable " + tokenUriMetadata.name;
    tokenUriMetadata.image = `ipfs://${imageUploadedResponses[imageUploadedResponseIndex].IpfsHash}`;
    const metadataUploadResponse = await storeTokenUriMetadata(
      tokenUriMetadata
    );

    tokenUris.push(`ipfs://${metadataUploadResponse.IpfsHash}`);
  }

  console.log(`All metadata files were uplodaded. They are: ${tokenUris}`);
  return tokenUris;
}
module.exports.tags = ["all"];

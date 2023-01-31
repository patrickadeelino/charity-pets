const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const {
  storeImages,
  storeTokenUriMetadata,
} = require("../utils/uploadToPinata");
const { verify } = require("../utils/verify");

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [],
};

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  let tokenUris = [];
  const { responses: dogsResponses } = await storeImages("images/dogs");
  const { responses: catsResponses } = await storeImages("images/cats");
  let dogsTokenUris = await uploadToPinata(dogsResponses, "Dog");
  let catsTokenUris = await uploadToPinata(catsResponses, "Cat");
  tokenUris = dogsTokenUris
    .concat(catsTokenUris)
    .sort(() => Math.random() - 0.5);

  log("=======================");
  const args = [tokenUris];
  const { deployer } = await getNamedAccounts();
  const charityPets = await deploy("CharityPets", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.waitConfirmations || 5,
    gasPrice: 70000000000,
  });
  log("Deployed to:", charityPets.address);
  if (!developmentChains.includes(network.name)) {
    log("Verifying on etherscan...");
    await verify(charityPets.address, args);
  }
};

async function uploadToPinata(imageUploadedResponses, type) {
  console.log(
    `${imageUploadedResponses.length} images will be uploaded to Pinata.`
  );
  let tokenUris = [];
  for (let imageUploadedResponseIndex in imageUploadedResponses) {
    console.log(`Uploading metadata ${imageUploadedResponseIndex}`);

    let tokenUriMetadata = { ...metadataTemplate };
    tokenUriMetadata.name = "Charity Pet";
    tokenUriMetadata.description = `An adorable Charity Pet`;
    tokenUriMetadata.image = `ipfs://${imageUploadedResponses[imageUploadedResponseIndex].IpfsHash}`;
    tokenUriMetadata.attributes = [{ trait_type: "type", value: type }];
    const metadataUploadResponse = await storeTokenUriMetadata(
      tokenUriMetadata
    );

    tokenUris.push(`ipfs://${metadataUploadResponse.IpfsHash}`);
  }

  console.log(`All metadata files were uplodaded. They are: ${tokenUris}`);
  return tokenUris;
}

module.exports.tags = ["all"];

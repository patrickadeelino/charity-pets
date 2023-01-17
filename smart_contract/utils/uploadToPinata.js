const pinataSDK = require("@pinata/sdk")
const path = require("path")
const fs = require("fs")

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataApiSecret = process.env.PINATA_API_SECRET;
const pinata = new pinataSDK(pinataApiKey, pinataApiSecret);

async function storeImages(imagesPath) {
    console.log("Uploading images to Pinata");
    const fullImagesPath = path.resolve(imagesPath)
    const files = fs.readdirSync(fullImagesPath)
    let responses = [];
    for (fileIndex in files) {
        const readableStreamForFile = fs.createReadStream(fullImagesPath + '/' + files[fileIndex]);
        try {
            const options = {
                pinataMetadata: {
                    name: files[fileIndex],
                },
            }
            const response = await pinata.pinFileToIPFS(readableStreamForFile, options);
            responses.push(response)
        } catch (error) {
            console.log(error);
        }
    }

    return {responses, files}
}

async function storeTokenUriMetadata(metadata) {
    try {
        const response = await pinata.pinJSONToIPFS(metadata);
        
        return response;
    } catch (error) {
        console.log(error)
    }
}
module.exports = { storeImages, storeTokenUriMetadata }
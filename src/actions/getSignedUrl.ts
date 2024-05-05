const {Storage} = require('@google-cloud/storage')
require('dotenv').config()

const projectID = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;
const storage = new Storage({projectID,keyFilename});
const bucketName = process.env.BUCKET_NAME;

export const getSignedUrl = (async () => {
    let arrayList = [];
    try {
    const [files] = await storage.bucket(bucketName).getFiles({matchGlob: "*png"});
    const reverseArray = files.reverse()
    for (const file of reverseArray) {
      const [url] = await file
      .getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000
      });
      const [metadata] = await file
      .getMetadata();
      let metadataId = (metadata.name);
      arrayList.push([url,metadataId]).toString();
    }
    let endResult = await Promise.all(arrayList);
    return endResult;
  } catch (error:unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
  })
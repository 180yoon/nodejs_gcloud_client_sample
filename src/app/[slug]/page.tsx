const {Storage} = require('@google-cloud/storage')
require('dotenv').config()

const projectID = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;
const storage = new Storage({projectID,keyFilename});
const bucketName = process.env.BUCKET_NAME;

import '.././globals.css'
  export default async function Page({ params }: { params: { slug: string } }) {
    try {
    const file = await storage.bucket(bucketName).file(`${params.slug}.mp4`)
      .getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000
      });
      const [metadata] = await storage.bucket(bucketName).file(`${params.slug}.mp4`)
      .getMetadata();

      if (metadata.metadata) {
        for (const key in metadata.metadata) {
          console.log(`${key}=${metadata.metadata[key]}`);
        }
    }
      return(
      <html>
        <body>
            <img src ={file}/>
            <a>
                {metadata.metadata.title}
            </a>
        </body>
    </html>
    )

  } catch (error:unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }


  }
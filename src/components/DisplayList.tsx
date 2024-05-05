const {Storage} = require('@google-cloud/storage')
require('dotenv').config()

const projectID = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;
const storage = new Storage({projectID,keyFilename});
const bucketName = process.env.BUCKET_NAME;

import { getSignedUrl } from "@/actions/getSignedUrl";
import DisplayCard from "./DisplayCard";
import { getMasonryUrl } from "@/actions/getMasonryUrl";

export default async function DisplayList(){
    let testHold = await getSignedUrl();
    return (
      <div className="p-2 pt-12 pb-12 items-center grid grid-cols-2 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
        {testHold.map(([data, data2]) => (
          <DisplayCard data={data} data2 = {data2}/>
        ))}
      </div>
    )
  }
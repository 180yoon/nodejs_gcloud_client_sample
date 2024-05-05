const {Storage} = require('@google-cloud/storage')
require('dotenv').config()

const projectID = process.env.PROJECT_ID;
const keyFilename = process.env.KEYFILENAME;
const storage = new Storage({projectID,keyFilename});
const bucketName = process.env.BUCKET_NAME;
import { getMasonryUrl } from "@/actions/getMasonryUrl";


export default function DisplayCard({data, data2}:any) {
    let newID = data2.replace(".png","")
    return (
      <div className='break-words text-pink-600 w-full p-2 h-full'>
        <div className='w-full h-full'>
          <a href={newID}>
          <img className='h-full object-contain' key = {data2} src={data}></img>
          </a>
        </div>
      </div>
    )
  }
  
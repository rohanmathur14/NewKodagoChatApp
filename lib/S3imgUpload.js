import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand, DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

//require("dotenv").config();
const client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY
    }
})

export async function S3imgUpload(key,url,type='',isDefaultImage = true) {
    try {
        
        
        if (key !== null && key != '') {
            const imageURL = url
            const res = await fetch(imageURL)
            const blob = await res.buffer()

            //console.log("KEY", key)
            const objectParams = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: key,
                Body: blob,
            }

            const command = new PutObjectCommand(bucketParams);
            const url = await getSignedUrl(client, command, { expiresIn: 60 }).then((val) => val);

            return url;

        }
        else {
            return null;
        }


        
        
    }
    catch (err) {
       console.log("ERR",err)
        return null;
    }
}
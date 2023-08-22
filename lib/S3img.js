import path from 'path';
import * as fs from 'fs';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand, DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
//import {fs} from "fs";
//const fs = require("fs");
//import fs from 'fs';
const client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY
    }
})


export async function S3img(keyImg,path='', isDefaultImage = true) {
    try {

        let key = (keyImg !== null && keyImg != '') ? path + keyImg : ((isDefaultImage) ? 'uploads/images/dialmenow.png' : null)
        if (key !== null && key != '') {

            const objectParams = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: key,
                Expires: 3600
            }
            // 'uploads/category/images/octqk0SfPUO99hZAk7GPfdJkWyhvsrCyuHpRhyeB.jpg'
            //const url = s3.getSignedUrl("getObject", objectParams);

            const command = new GetObjectCommand(objectParams);
            const url = await getSignedUrl(client, command, { expiresIn: 3600 }).then((val) => val);

            return url;

        }
        else {
            return null;
        }




    }
    catch (err) {
        console.log("_____________________________ERR S3 Image fetch Time_________________________", err)
        return null;
    }
}

export async function S3imgUpload(key, source_url, type = '', isDefaultImage = true) {
    try {

        //console.log("____________upload img__________________", key, source_url, __dirname.split('.next'))
        if (key !== null && key != '') {
            const imageURL = source_url

            let rootPath = __dirname.split('.next')[0] + "public/temp/" + source_url
            
            /*let blob = await fs.readFile(rootPath, function (err, data) {
                if (err) throw err // Fail if the file can't be read.

                return data
                
            })*/

            let blob = fs.readFileSync(rootPath)


            const putObjectParams = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: key,
                Body: blob,

            }
            const putCommand = new PutObjectCommand(putObjectParams);


            const response = client.send(putCommand);

            return true;
            /*
            const putObjectParams = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: key,
                Body: data,

            }
            const putCommand = new PutObjectCommand(putObjectParams);


            const response = client.send(putCommand);
            */

            /*const objectParams = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
                Key: key,

            }

            const command = new GetObjectCommand(objectParams);
            const url = await getSignedUrl(client, command, { expiresIn: 60 }).then((val) => val);
            console.log("______url____________", url)
            return url;*/

        }
        else {
            return false;
        }




    }
    catch (err) {
        console.log("__________________S3 upload error______________________________", err)
        return false;
    }
}
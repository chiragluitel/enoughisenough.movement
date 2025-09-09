import { Request, Response } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const uploadMedia = async (req: Request, res: Response) => {

    const { filename, fileType } = req.body;

    if (!filename || !fileType) {
        return res.status(400).json({ error: 'Filename and fileType are required.' });
    }
    
    const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
    const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
    const AWS_REGION = process.env.AWS_REGION;
    const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;

    if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION || !S3_BUCKET_NAME) {
        console.error("Missing required environment variables. Check ENV.");
        return res.status(500).json({ error: "Server configuration error." });
    }

    const s3Client = new S3Client({
        region: AWS_REGION,
        credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });

    const command = new PutObjectCommand({
        Bucket: S3_BUCKET_NAME,
        Key: `seims/${process.env.ENTERPRISE_KEY}/${filename}`,
        ContentType: fileType,
    });

    try{
        const url = await getSignedUrl(s3Client, command, {expiresIn: 3600});
        res.json({url})
    }catch(err){
        console.error("Error generating signed URL:", err);
        res.status(500).json({ error: "Could not generate signed URL." });
    }

}
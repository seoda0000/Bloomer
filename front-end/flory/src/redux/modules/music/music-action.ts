import AWS from "aws-sdk";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 일기 생성
export const getMusicAction = async (musicTitle: any) => {
  try {
    const s3 = new AWS.S3();
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
      region: process.env.REACT_APP_S3_REGION,
    });
    const params = {
      Bucket: "bloomer205",
      Key: `music/${musicTitle}.mp3`,
    };

    //

    const url = await s3.getSignedUrlPromise("getObject", params);

    console.log(url, "[redux] s3에서 준 url ");

    return url;
  } catch (e) {
    return e;
  }
};
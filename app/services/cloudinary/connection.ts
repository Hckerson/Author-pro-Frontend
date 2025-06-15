import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

interface Preset {
  name: string;
  categories: string;
  folder: string;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(public_id: string, file_path: string) {
  console.log(`Uploading images to cloudinary`);
  try {
    const response = await cloudinary.uploader.upload(file_path, {
      resource_type: "auto",
      public_id: public_id,
      overwrite: true,
      upload_preset: 'coverImgs'
    });
    console.log(response);
  } catch (error) {
    console.error(`Error uploading images to cloudinary: ${error}`);
  }
}

export async function getImgUrl(public_id: string) {
  try {
    const url = await cloudinary.url(public_id, {
      quality: "auto",
      fetch_format: "auto",
    });
    return url;
  } catch (error) {
    console.error(`Error fetching imageUrl: ${error}`);
    return;
  }
}


export async function setUploadPreset(payload: Preset) {
  const { name, categories, folder } = payload;
  try {
    const response = await cloudinary.api.create_upload_preset({
      name: name,
      unsigned: false,
      tags: categories,
      folder: folder,
      // transformation: [
      //   {
      //     quality: "auto",
      //   },
      // ],
    });
    console.log("Upload preset created:", response);
    return response;
  } catch (error) {
    console.error(`Error setting preset: ${error}`);
    throw error;
  }
}
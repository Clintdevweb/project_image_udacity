import sharp from "sharp";
import checkFileExist from "./checkFileExist";
import { unlinkSync } from "fs";

const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const isExist = await checkFileExist(`src/assets/thumb/${filename}.jpg`)
    if(isExist) {
      unlinkSync(`src/assets/thumb/${filename}.jpg`)
    }
    const result = await sharp(`src/assets/full/${filename}.jpg`)
      .resize({ width: width, height: height, fit: "cover" })
      .toFile(`src/assets/thumb/${filename}.jpg`)
      .then(() => {
        return Promise.resolve(true)
      })
      .catch(() => {
        return Promise.reject(false)
      })

    if (result) {
      return Promise.resolve("Success resize image")
    } else {
      return Promise.reject("Success resize image")
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default resizeImage

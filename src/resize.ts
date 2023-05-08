import sharp from "sharp";

const resizeImage = async (filename: string, width: number, height: number): Promise<string> => {
    try {
        const result = await sharp(`src/assets/full/${filename}.jpg`)
            .resize({ width: width, height: height, fit: "cover" })
            .toFile(`src/assets/thumb/${filename}.jpg`)
            .then(() => {
                return Promise.resolve(true)
            })
            .catch(() => {
                return Promise.reject(false)
            });

            if(result) {
                return Promise.resolve("Success resize image")
            }else {
                return Promise.reject("Success resize image")
            }
    } catch (error: any) {
        console.log(error);
        throw(error)
    }
};

export default resizeImage
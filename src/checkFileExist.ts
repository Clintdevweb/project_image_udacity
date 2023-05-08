import { existsSync } from "fs"

const checkFileExist = async (filename: string): Promise<boolean> => {
   if(existsSync(filename)) {
    return Promise.resolve(true)
   }else {
    return Promise.resolve(false)
   }
}

export default checkFileExist
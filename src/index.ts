import express from "express"
import resizeImage from "./resize"

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Welcome to my project image")
})

app.get("/api/images", async (req, res) => {
  try {
    let filename = ""
    let width = 200
    let height= 200

    if (req.query.width) {
      width = Number(req.query.width)
    } else {
      width = 200
    }

    if (req.query.height) {
      height = Number(req.query.height)
    } else {
      width = 200
    }

    if (req.query.filename) {
      filename = req.query.filename.toString()
      const result = await resizeImage(filename, width, height)
      if (result) {
        res.sendFile(`${__dirname}/assets/thumb/${filename}.jpg`)
      }
    } else {
      res.send("No file name no provide, Please check again!")
    }
  } catch (error) {
    console.log(error)
    res.send("File name can be wrong, Plese check again!")
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

export default app

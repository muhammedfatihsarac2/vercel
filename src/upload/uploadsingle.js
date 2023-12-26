const userData = require(__dirname + "/../../schema/userInfo.js")
const fs = require("fs")
const path = require("path")
module.exports = async(req, res)=>{
  //verify token existence and validity
  if(!req.file){
    res.status = 400
    return res.json({
      Status: 400,
      Message: "No file provided"
    })
  }
  const { headers } = req
  const token = headers.token
  const fileName = req.file.originalname
  //-----------------------------------------------------------------------------------------------------------------------------------
  //write file from the temporary buffer
  const tempPath = path.resolve(req.file.path)
  const writePath = path.resolve(__dirname + `/../../data/${id}/${fileName}`)
  const fileBuffer = fs.readFileSync(tempPath)
  fs.writeFileSync(writePath, fileBuffer)
  fs.rmSync(tempPath)
  if(fs.existsSync(writePath)){
    res.status = 200
    return res.json({
      Status: 200,
      Message: "Finished written file",
      Content: {
        fileName: fileName,
        fileType: req.file.mimetype,
        size: req.file.size,
        path: `/file/${id}/${fileName}`
      }
    })
  }
}
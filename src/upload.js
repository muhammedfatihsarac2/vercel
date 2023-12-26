const express = require('express');
const fs = require("fs");
const path = require("path");

const tempPath = path.resolve(req.file.path);
const writePath = path.resolve(__dirname + `/../../data/${id}/${fileName}`);
const fileBuffer = fs.readFileSync(tempPath);
app.post(`/upload`, (req, res)=>{
    if (!req.files || Object.keys(req.files).length === 0){
      return res.json=400
    }
  });
  const fileName = req.file.originalname
  const { headers } = req
  module.exports= async(req,res)=>{
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
  };
  

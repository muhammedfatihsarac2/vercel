const express = require('express');
const multer = require("multer")

const router = new express.Router();
const upload = multer({dest: __dirname + "/../data/temp"});
const write = process.env["ALLOWWRITE"]
if(write?.toLowerCase() == "true"){
    router.post("/upload", upload.single('content'), require("src/upload.js"))    
};
module.exports = router
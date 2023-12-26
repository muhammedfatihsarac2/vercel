const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs=require(`fs`);
const port = 3000;
const mongoose=require(`mongoose`);
const router=require(`src/router.js`);
 
module.exports = async() => {
  const URI = process.env['URI']
  mongoose.connect(URI).then((data, error) => {
      if(error){
          console.log("404 MongoDB")
          console.log(error)
          return process.exit(1)
      }
      console.log("200 MongoDB")
      return data
  }) 
};
app.use(`/`, router);
app.all(`/`, (req, res) => {
  return res.json ({
    Status: 200
  })
});

if(!fs.existsSync("./data") || !fs.existsSync("./data/temp")){
  fs.mkdir("./data/temp")
}


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});
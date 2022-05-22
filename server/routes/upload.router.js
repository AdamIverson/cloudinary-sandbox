const express = require("express");
// const pool = require("../modules/pool");
const router = express.Router();

router.post('/photos/upload', fileUpload.array('image', 5), function (req, res, next) {
      console.log("Images ", req.file);  
})



module.exports = router;
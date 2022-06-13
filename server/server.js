const express = require("express");
const { cloudinary } = require("./utils/cloudinary");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "testFolder1000",
      api_key: `${process.env.CLOUDINARY_API_KEY}`,
      cloud_name: `${process.env.CLOUDINARY_NAME}`,
      api_secret: `${process.env.CLOUDINARY_SECRET}`,
    }); 
    // console.log('fileStr:', fileStr);
    console.log("uploadedResponse:", uploadedResponse);
    res.json({ msg: "YAy " });
  } catch (error) {
    console.error(error);
  }
});

const testRouter = require("./routes/test.router");

app.use("/api/test", testRouter);
//
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// Serve static files
app.use(express.static("build"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const express = require("express");
const { cloudinary } = require('./utils/cloudinary');
require('dotenv').config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.post('/api/upload', (req, res) => {
  try {
    const fileStr = req.body.data;
    console.log(fileStr);
  } catch (error) {
      console.error(error)
  }
})

const testRouter = require('./routes/test.router');

app.use('/api/test', testRouter);
// 
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// Serve static files
app.use(express.static('build'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
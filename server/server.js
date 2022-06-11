const express = require("express");
require('dotenv').config();

const app = express();

const testRouter = require('./routes/test.router');
const uploadRouter = require('./routes/upload.router');

app.use('/api/test', testRouter);
app.use('/api/upload', uploadRouter);

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// Serve static files
app.use(express.static('build'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
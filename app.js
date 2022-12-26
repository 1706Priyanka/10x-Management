const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/", require("./routes/class"));

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(3001, async () => {
  await mongoose.connect("mongodb://localhost:27017/crud");
  console.log("server run");
});

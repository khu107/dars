const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인에서의 요청을 허용 (* 대신 특정 도메인을 명시할 수 있음)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // 허용할 HTTP 메서드
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // 허용할 헤더
  next();
});
mongoose
  .connect(
    "mongodb+srv://khusan:khusan@cluster0.8mnw2t4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ulandi"))
  .catch((e) => console.error(e));
app.use((req, _, next) => {
  console.log(`URL:${req.url}, method: ${req.method}`);
  return next();
});

app.use(require("./routes"));

app.listen(8080, () => {
  console.log("server ishga tushdi");
});

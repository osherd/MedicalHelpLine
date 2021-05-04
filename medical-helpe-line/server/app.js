const express = require("express");
const path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public", "build")));
app.get("/", (req, res) => {
  res.status(200).send("hello admin");
});
app.post("/api/login", (req, res) => {
  const { userName, password } = req.body;

  console.log("req.body", req.body);

  if (userName === "abc" && password === "123") {
    return res.send({ message: "ok" });
  }

  res.sendStatus(403);
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

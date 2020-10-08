const path = require("path");
const express = require("express");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log("port is listening");
});

const path = require("path");
const express = require("express");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname));

// eslint-disable-next-line
app.use(express.static(path.join(__dirname, "build")));

// eslint-disable-next-line
app.get("/*", function (res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);

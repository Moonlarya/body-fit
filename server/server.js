const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const { connection } = mongoose;
connection.once("open", () => {
  // eslint-disable-next-line
  console.log("MongoDB database connection established successfully");
});

const workoutProgramRouter = require("./routes/workoutProgram");

app.use("/workoutProgram", workoutProgramRouter);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log("port is listening " + port);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

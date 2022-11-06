// const express = require("express");
import express from "express";

const app = express();
const port = 3000;
const path = require("path");
import configViewEnigne from "../src/config/ViewEngine";

configViewEnigne(app);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/text/index.ejs"));
// });
app.get("/", (req, res) => {
  res.render("text/index.ejs");
});
app.get("/hoem", (req, res) => {
  res.send("Hello Home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

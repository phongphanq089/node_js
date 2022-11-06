import express from "express";

const configViewEnigne = (app) => {
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEnigne;

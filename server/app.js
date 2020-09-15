console.log("hello I'm app.js");
const express = require("express");
const path = require("path");
// const db = require("../knex.js");
const db = require("../db/data/restaurants.json");

const setupServer = () => {
  console.log("hello. in setupServer!!");
  const app = express();

  app.use(express.json());

  //public folder
  app.use(express.static(path.resolve(__dirname, "..", "buid")));
  // app.use(express.static("public"));

  app.get("/api/restaurants", (req, res) => {
    res.send(db);
  });

  return app;
};

module.exports = { setupServer };

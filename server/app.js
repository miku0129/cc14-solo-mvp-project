console.log("hello I'm app.js");
const express = require("express");
const path = require("path");
// const db = require("../knex.js");
const db = require("../db/data/restaurants.json");
const cors = require("cors");

const setupServer = () => {
  console.log("hello. in setupServer!!");
  const app = express();
  app.use(cors());

  app.use(express.json());

  //you have to finish buidling frontend
  app.use(express.static(path.resolve(__dirname, "..", "buid")));
  // public folder
  // app.use(express.static("public"));

  //all restaurants
  app.get("/api/restaurants", (req, res) => {
    res.send(db);
  });

  //names of all restaurants
  app.get("/api/restaurants/name", (req, res) => {
    let ret = db.map.name;
    res.send(ret);
  });

  return app;
};

module.exports = { setupServer };

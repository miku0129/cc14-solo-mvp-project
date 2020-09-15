console.log("hello I'm app.js");
const express = require("express");
const path = require("path");
const db = require("../db/data/knex.js");
// const db = require("../db/data/restaurants.json");
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
  // app.get("/api/restaurants", (req, res) => {
  //   console.log("I'm in /api/restaurants!");
  //   res.send(db);
  // });

  // all restaurants take2
  app.get("/api/restaurantssss", async (req, res) => {
    try {
      console.log("I'm in /api/restaurantssss!");
      const restaurants = await db.select().table("restaurants");
      res.send(restaurants);
    } catch (err) {
      console.error("Error loading locations!", err);
      res.sendStatus(500);
    }
  });

  return app;
};

module.exports = { setupServer };

console.log("hello. in knex.js");

const knex = require("knex");
const config = require("../../db/data/knexfile");
const db = knex(
  process.env.NODE_ENV === "production" ? config.production : config.development
);

// const environment = process.env.NODE_ENV || "development";
// const config = require("../knexfile")[environment];
// // module.exports = require("knex")(config);
// const db = require("knex")(config);
module.exports = db;

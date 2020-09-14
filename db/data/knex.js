console.log("hello. in knex.js");

const knex = require("knex");
console.log("debug1,hello. in knex.js");

// const config = require("../../db/data/knexfile");
const config = require("../../knexfile");
console.log("debug2,hello. in knex.js");

const db = knex(
  process.env.NODE_ENV === "production" ? config.production : config.development
);
console.log("debug3,hello. in knex.js");

// const environment = process.env.NODE_ENV || "development";
// const config = require("../knexfile")[environment];
// // module.exports = require("knex")(config);
// const db = require("knex")(config);
module.exports = db;

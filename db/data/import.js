/* eslint-disable no-unused-vars */
const fs = require("fs");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("restaurants").del();
  try {
    //readFileSyncには実行するディレクトリからのパスで書く
    const restaurants = JSON.parse(
      fs.readFileSync("./db/data/restaurants.json")
    );
    for (const restaurant of restaurants) {
      const name = restaurant.name;
      const feature = restaurant.feature;
      const tell = restaurant.tell;
      const business_hours1 = restaurant.business_hours1;
      const business_hours2 = restaurant.business_hours2;
      const regular_holiday = restaurant.regular_holiday;
      const place = restaurant.place;
      const url = restaurant.url;

      const result = await knex("restaurants").insert({
        name,
        feature,
        tell,
        business_hours1,
        business_hours2,
        regular_holiday,
        place,
        url,
      });
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
  // .then(function () {
  //   // Inserts seed entries
  //   return knex("restaurants").insert([]);
  // });
};

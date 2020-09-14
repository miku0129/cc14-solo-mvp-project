exports.up = function (knex, Promise) {
  return knex.schema.createTable("restaurants", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("feature").notNullable();
    table.string("tell").notNullable();
    table.string("business_hours1").notNullable();
    table.string("business_hours2").notNullable();
    table.string("regular_holiday").notNullable();
    table.string("place").notNullable();
    table.string("url").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("restaurants");
};

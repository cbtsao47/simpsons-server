exports.up = function(knex, Promise) {
  return knex.schema.alterTable("quotes", table => {
    table.boolean("liked").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable("quotes", table => {
    table.dropColumn("liked");
  });
};

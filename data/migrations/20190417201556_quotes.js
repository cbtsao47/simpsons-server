exports.up = function(knex, Promise) {
  return knex.schema.createTable("quotes", tbl => {
    tbl.text("raw_character_text", 255);
    tbl.text("spoken_words", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("quotes");
};

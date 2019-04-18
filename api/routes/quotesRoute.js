const express = require("express");
const route = express.Router();
const db = require("../../data/dbConfig");

route.get("/quotes", async (req, res) => {
  const { perPage = 30, currentPage = 1 } = req.query;
  try {
    const quotes = await db("quotes")
      .whereNot({
        spoken_words: null,
        raw_character_text: null,
        id: 1
      })
      .select(
        "id",
        "raw_character_text as character",
        "spoken_words as quote",
        "liked"
      )
      .paginate(perPage, currentPage, true);
    res.send(quotes);
  } catch (err) {
    res.json({ err: err });
  }
});

module.exports = route;

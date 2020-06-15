const db = require("../models");

// Defining methods for the booksController
module.exports = {
  saveOne: function (req, res) {
    db.Gifs.create(req.body)
      .then((gifs) => res.json(gifs))
      .catch((err) => res.status(422).json(err));
  },
  getSaved: function (req, res) {
    db.Gifs.find({})
      .then((gifs) => res.json(gifs))
      .catch((err) => res.status(422).json(err));
  },
};

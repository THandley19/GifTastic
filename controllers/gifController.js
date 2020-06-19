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
  deleteOne: function (req, res) {
    db.Gifs.deleteOne({ _id: req.params.id })
      .then((deletedGif) => res.json(deletedGif))
      .catch((err) => res.status(422).json(err));
  },
};

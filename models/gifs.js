const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gifSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Gifs = mongoose.model("Gifs", gifSchema);

module.exports = Gifs;

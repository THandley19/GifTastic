import axios from "axios";

export default {
  getGifs: function (query) {
    return axios.get(
      "https://api.giphy.com/v1/gifs/search?q=" +
        query +
        "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=30"
    );
  },
  saveGifs: function (query) {
    return axios.post("api/gifs/create-gif", query);
  },
  getSavedGifs: function () {
    return axios.get("api/gifs/saved");
  },
  deleteGif: function (query) {
    return axios.delete("api/gifs/" + query);
  },
};

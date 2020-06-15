const router = require("express").Router();
const gifRoutes = require("./gifs");

router.use("/gifs", gifRoutes);

module.exports = router;

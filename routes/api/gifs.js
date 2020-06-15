const router = require("express").Router();
const gifController = require("../../controllers/gifController");

// get all units in the specified course
router.post("/create-gif", gifController.saveOne);

module.exports = router;

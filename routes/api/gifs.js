const router = require("express").Router();
const gifController = require("../../controllers/gifController");

// get all units in the specified course
router.post("/create-gif", gifController.saveOne);

router.get("/saved", gifController.getSaved);

router.delete("/:id", gifController.deleteOne);

module.exports = router;

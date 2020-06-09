const router = require("express").Router();
const MessageController = require("../../controllers/MessageController");

// Matches with "/api/books"
router.route("/").get(MessageController.findAll).post(MessageController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(MessageController.findById)
  .put(MessageController.update)
  .delete(MessageController.remove);

module.exports = router;

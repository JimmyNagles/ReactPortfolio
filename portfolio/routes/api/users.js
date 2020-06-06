const router = require("express").Router();
const UserController = require("../../controllers/UserController");

// Matches with "/api/books"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;

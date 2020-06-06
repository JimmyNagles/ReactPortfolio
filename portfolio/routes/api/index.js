const router = require("express").Router();
const UserRoutes = require("./users");

// Book routes
router.use("/users", UserRoutes);

module.exports = router;

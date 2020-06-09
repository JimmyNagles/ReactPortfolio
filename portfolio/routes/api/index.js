const router = require("express").Router();
const MessageRoutes = require("./message");

// Book routes
router.use("/message", MessageRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();

const newMessagesController = require("../controllers/newMessageController");

router.get("/", newMessagesController.newMessage);

module.exports = router;

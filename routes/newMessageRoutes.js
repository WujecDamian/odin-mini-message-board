const express = require("express");
const router = express.Router();

const newMessagesController = require("../controllers/newMessageController");

router.post("/", newMessagesController.newMessage);

module.exports = router;

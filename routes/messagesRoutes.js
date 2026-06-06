const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/messagesController");

router.get("/", messagesController.getMessages);
router.get("/messages/:messageId", messagesController.getMessageDetails);
module.exports = router;

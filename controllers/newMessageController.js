const { body, validationResult } = require("express-validator");

const db = require("../db/queries");

//Message validation
const validateMessage = [
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message cannot be empty.")
    .isAlphanumeric()
    .withMessage("Message must be alphanumeric."),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username cannot be empty.")
    .isLength({ min: 1, max: 255 })
    .withMessage("Must be shorter than 255 characters"),
];

const getNewMessageForm = (req, res) => {
  res.render("form");
};

const newMessage = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, message } = req.body;
  db.addMessage(username, message);
  res.redirect("/");
};

module.exports = { getNewMessageForm, newMessage, validateMessage };

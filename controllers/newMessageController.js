const messages = require("./messagesController");

const getNewMessageForm = (req, res) => {
  res.render("form");
};

const newMessage = (req, res) => {
  console.table(messages);
  const message = req.body.message;
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = { getNewMessageForm, newMessage };

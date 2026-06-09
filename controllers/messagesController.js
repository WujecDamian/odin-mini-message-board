const db = require("../db/queries");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("home", { messages });
};
const getMessageDetails = async (req, res) => {
  const messages = await db.getAllMessages();

  const url = req.url.split("/");
  const id = url[2];
  const message = messages[id];
  res.render("messageDetails", { message });
};

module.exports = { getMessages, getMessageDetails };

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessages = (req, res) => {
  res.render("home", { messages });
};
const getMessageDetails = (req, res) => {
  const url = req.url.split("/");
  const id = url[2];
  const message = messages[id];
  res.render("messageDetails", { message });
};

module.exports = { getMessages, getMessageDetails, messages };

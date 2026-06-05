const getMessages = (req, res) => {
  res.render("home", { messages });
};

module.exports = { getMessages };

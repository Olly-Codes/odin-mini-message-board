const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => {
    res.render("form", {title: "Create a new message"});
});

module.exports = messagesRouter;
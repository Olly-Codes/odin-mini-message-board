const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => {
    res.render("form");
});

module.exports = messagesRouter;
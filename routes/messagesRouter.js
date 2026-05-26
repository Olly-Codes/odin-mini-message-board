const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => res.send("This is the messages index"));

module.exports = messagesRouter;
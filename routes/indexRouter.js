const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const indexRouter = Router();

indexRouter.get("/", messagesController.messagesListGet);

module.exports = indexRouter;
const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const indexRouter = Router();

indexRouter.get("/", messagesController.messagesListGet);
indexRouter.post("/delete/:messageId", messagesController.messageDelete);

module.exports = indexRouter;
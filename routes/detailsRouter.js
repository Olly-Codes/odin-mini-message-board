const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const detailsRouter = Router();

detailsRouter.get("/:messageId", messagesController.messageGet);

module.exports = detailsRouter;
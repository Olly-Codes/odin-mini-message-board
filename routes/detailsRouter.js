const { Router } = require("express");
const { messages } = require("./indexRouter");

const detailsRouter = Router();

detailsRouter.get("/:messageId", (req, res) => {
    const id = req.params.messageId;
    const message = messages.find((msg) => msg.id === id);
    res.render("details", { message: message });
});

module.exports = detailsRouter;
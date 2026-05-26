const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Huh, is that the wizard of time?",
        user: "TheCurious",
        added: new Date()
    },
    {
        text: "Who knows, maybe I am, maybe I am not. Only time will tell",
        user: "DefinitelyNotTWOT",
        added: new Date()
    },
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages});
});

module.exports = indexRouter;
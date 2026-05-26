const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Huh, is that the wizard of time?",
        user: "TheCurious",
        added: new Date().toDateString()
    },
    {
        text: "Who knows, maybe I am, maybe I am not. Only time will tell",
        user: "DefinitelyNotTWOT",
        added: new Date().toDateString()
    },
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages});
});

indexRouter.post("/new", (req, res) => {
    const messageUser = req.body.user;
    const messageText = req.body.messageText;

    messages.push(
        {
            text: messageUser,
            user: messageText,
            added: new Date().toDateString()
        }
    );

    res.redirect("/");
});

module.exports = indexRouter;
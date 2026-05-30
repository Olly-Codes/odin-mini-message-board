const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const indexRouter = Router();

// const messages = [
//     {
//         text: "Huh, is that the wizard of time?",
//         user: "TheCurious",
//         added: new Date().toDateString(),
//         id: crypto.randomUUID()
//     },
//     {
//         text: "Who knows, maybe I am, maybe I am not. Only time will tell",
//         user: "DefinitelyNotTWOT",
//         added: new Date().toDateString(),
//         id: crypto.randomUUID()
//     },
// ];

indexRouter.get("/", messagesController.messagesListGet);

// indexRouter.post("/new", (req, res) => {
//     const messageUser = req.body.user;
//     const messageText = req.body.messageText;

//     messages.push(
//         {
//             text: messageText,
//             user: messageUser,
//             added: new Date().toDateString(),
//             id: crypto.randomUUID()
//         }
//     );

//     res.redirect("/");
// });

module.exports = indexRouter;
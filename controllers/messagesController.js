const db = require("../db/queries");

exports.messagesListGet = async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Home", messages });
}

exports.messageGet = async (req, res) => {
    const message_id = req.params.messageId
    const message = await db.getMessage(message_id);
    res.render("details", {title: "Details", message })
}

exports.newMessageGet = (req, res) => {
    res.render("form", { title: "Create a new message" });
}

exports.newMessagePost = async (req, res) => {
    const { user, messageText } = req.body;
    console.log(user, messageText)
    await db.insertMessage(user, messageText);
    res.redirect("/");
}
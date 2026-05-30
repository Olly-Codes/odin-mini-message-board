const db = require("../db/queries");

exports.messagesListGet = async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Home", messages });
}
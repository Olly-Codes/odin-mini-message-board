const db = require("../db/queries");
const { formatMessageDate } = require("../utils/dateFormatter");

exports.messagesListGet = async (req, res, next) => {
    try {
        const messages = await db.getAllMessages();
        const formattedMessages = messages.map((message) => {
            return {
                ...message,
                date_added: formatMessageDate(message.date_added)
            }
        });
        res.render("index", { title: "Home", messages: formattedMessages });
    } catch (err) {
        next(err);
    }   
}

exports.messageGet = async (req, res, next) => {
    try {
        const message_id = req.params.messageId
        const message = await db.getMessage(message_id);

        if (!message) {
            const error = new Error("The message you are looking for does not exist");
            error.statusCode = 404;
            throw error;
        }

        const formattedMessage = {
            ...message,
            date_added: formatMessageDate(message.date_added)
        }

        res.render("details", {title: "Details", message: formattedMessage })
    } catch (err) {
        next(err);
    }
}

exports.newMessageGet = (req, res) => {
    res.render("form", { title: "Create a new message" });
}

exports.newMessagePost = async (req, res, next) => {
    try {
        const { user, messageText } = req.body;
        await db.insertMessage(user, messageText);
        res.redirect("/");
    } catch {
        next(err);
    }
    
}

exports.messageDelete = async (req, res, next) => {
    try {
        const { messageId } = req.params;

        const messageExists = await db.getMessage(messageId);
        if(!messageExists) {
            const error = new Error("Cannot delete a message that does not exist");
            error.statusCode = 404;
            throw error;
        }

        await db.deleteMessage(messageId);
        res.redirect("/");
    } catch (err) {
        next(err);
    }
    
}
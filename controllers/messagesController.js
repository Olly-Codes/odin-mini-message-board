const db = require("../db/queries");
const { formatMessageDate } = require("../utils/dateFormatter");
const { body, validationResult, matchedData } = require("express-validator");

const alphaErr = "must only contain letters";
const lengthErr = "must be between 1 and 200 characters";

const validateUser = [
    body("user").trim()
    .isAlpha().withMessage(`Username ${alphaErr}`),
    body("messageText").trim()
    .isLength({ min: 1, max: 200}).withMessage(`Message content ${lengthErr}`)
]

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

exports.newMessagePost = [
    validateUser,
    async (req, res, next) => {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(400).render("form", {
                title: "Create a new message",
                errors: validationErrors.array(),
            });
        } else {
            try {
                const { user, messageText } = req.body;
                await db.insertMessage(user, messageText);
                res.redirect("/");
            } catch {
                next(err);
            }
        } 
}
]

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
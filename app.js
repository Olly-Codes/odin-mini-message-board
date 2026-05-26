const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");

app.use("/", indexRouter);
app.use("/new", messagesRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${PORT}`);
});
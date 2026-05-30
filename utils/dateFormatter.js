const { format } = require("date-fns");

const formatMessageDate = (date) => {
    if (!date) return null;
    return format(date, 'MMMM d, yyyy, h:mm a');
}

module.exports = {
    formatMessageDate
}
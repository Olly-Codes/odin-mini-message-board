const pool = require("./pool");

const getAllMessages = async () => {
    const { rows } = await pool.query(
        `SELECT u.id, u.username, m.message_content, m.date_added
        FROM users u JOIN messages m
        ON u.id = m.user_id;
        `
    )
    return rows;
}

module.exports = {
    getAllMessages
}
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

const getMessage = async (message_id) => {
    const query =`
        SELECT u.username, m.message_content, m.date_added
        FROM users u JOIN messages m
        ON u.id = m.user_id
        WHERE m.id = $1;
    `;
    const { rows } = await pool.query(query, [message_id]);
    return rows[0];
}

module.exports = {
    getAllMessages,
    getMessage
}
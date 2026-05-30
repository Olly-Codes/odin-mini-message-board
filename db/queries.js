const pool = require("./pool");

const getAllMessages = async () => {
    const { rows } = await pool.query(
        `SELECT m.id, u.username, m.message_content, m.date_added
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

const insertMessage = async (username, message_content) => {
    let userId;
    const userCheck = await pool.query(
        "SELECT id FROM users WHERE username = $1", [username]
    );

    if (userCheck.rows.length > 0) {
        userId = userCheck.rows[0].id;
    } else {
        const newUser = await pool.query(
            "INSERT INTO users (username) VALUES ($1) RETURNING id", [username]
        );
        userId = newUser.rows[0].id;
    }

    await pool.query(`
        INSERT INTO messages (message_content, date_added, user_id) 
        VALUES
            ($1, NOW(), $2) 
        `, [message_content, userId]
    );

}

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage
}
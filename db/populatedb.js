const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message_content TEXT NOT NULL,
    date_added TIMESTAMP(0),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO users (username)
VALUES
    ('TheCurios'),
    ('DefinitelyNotTWOT');

INSERT INTO messages (message_content, date_added, user_id)
VALUES
    ('Huh, is that the wizard of time?', NOW(), 1),
    ('Who knows, maybe I am, maybe I am not. Only time will tell', NOW(), 2);
`;

(async () => {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URI,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
})();
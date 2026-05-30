# Mini message board

A simple full-stack mini-message-board built with Node.js, Express, EJS and PostgreSQL

## Home
<img width="1920" height="962" alt="message-board-home" src="https://github.com/user-attachments/assets/7c5634e2-6ea4-4817-ba3d-401d31036c8d" />
<br />

## Message Details
<img width="1920" height="962" alt="message-board-details" src="https://github.com/user-attachments/assets/b8699f90-e0d4-4110-8b0a-c4be5e3fff55" />

## Message Form
<img width="1920" height="962" alt="message-board-form" src="https://github.com/user-attachments/assets/330c8640-a76d-43b1-a247-839625015b98" />
<br />

## Message Form Errors
<img width="1920" height="962" alt="message-board-form-errors" src="https://github.com/user-attachments/assets/44a97a86-21b2-47c2-bcee-4e7fc988705d" />
<br />

## Features
- Viewing all messages created on the homepage
- Submission of new messages via a form
- Viewing of individual message details
- Data persistence via PostgreSQL database

## Tech Stack
- **Backend**: Node.js, Express
- **Templating**: EJS
- **Database**: PostgreSQL via `node-postgres` (pg)
- **Validation**: express-validator
- **Deployment**: Render

## What I learnt
- MVC project structure with Express routers and controllers
- Server-side templating with EJS
- HTML form handling, GET vs POST, `req.body`, PRG pattern
- Input validation and sanitization with `express-validator`
- PostgreSQL setup, schema and queries via `node-postgres`
- Parameterized queries to prevent SQL injection
- Database seeding via a Node script
- Environment variables for credentials
- Deployment to a cloud PaaS provider

## Installation
1. Clone the repo
2. Install dependencies: `npm install`
3. Set up your `.env` with your database connection string
4. Seed the database: `node db/populatedb.js`
5. Start the server: `node --watch app.js`

## Live demo
https://mini-message-board-enwb.onrender.com/

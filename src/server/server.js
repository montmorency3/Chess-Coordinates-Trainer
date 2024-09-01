const express = require('express');
const { Pool } = require('pg');

console.log("hello world");

const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 4000;

const db =new Pool({
    user: "postgres",
    host: "localhost",
    database: "ChessApp",
    password: "king",
    port: process.env.PORT,
})

db.connect();


// Enable CORS for all origins
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  res.send("hello");
});



app.post("/login", async (req,res) => {
  const { email, password } = req.body.inputData
  const result = await db.query('SELECT * FROM Users WHERE email = $1', [email]);

  if (result.rows.length > 0) {
    const registeredPassword = result.rows[0].hashed_password

    if (password === registeredPassword) {
      res.json({ message: 'Login successful', email });
    }
    else {
      res.json({ message: 'Login unsuccessful', email});
    }
  }

})

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
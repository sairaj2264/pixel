import express from "express";
import pkg from 'pg';
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const { Pool } = pkg;


const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 🚀 Register API
app.post("/register", async (req, res) => {
    console.log("Received request:", req.body); 
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const disorder = req.body.disorder;
    const password = req.body.password;


    if (!username || !phoneNumber || !disorder || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    try {
      const result = await pool.query(
        "INSERT INTO users (username, phoneNumber, disorder, password) VALUES ($1, $2, $3, $4) RETURNING *",
        [username, phoneNumber, disorder, password]
      );
      res.json({ message: "User registered successfully!", user: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error registering user." });
    }
});

// 🚀 Login API
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);

    if (result.rows.length > 0) {
      res.json({ message: "Login successful!", user: result.rows[0] });
    } else {
      res.status(401).json({ error: "Invalid username or password." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error logging in." });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

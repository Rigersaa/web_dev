const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json()); // To handle JSON requests
app.use(cors()); // Enable CORS for cross-origin requests

const users = []; // This will store users temporarily. In a real app, you'd use a database.

const SECRET_KEY = 'your-secret-key'; // Use a strong key in a real app!

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password and store the user
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User created successfully' });
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // Validate the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ token });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

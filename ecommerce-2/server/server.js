const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Add this middleware to parse JSON

const PORT = 5050;

const connection = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5720642',
    password: 'AGJySUqpfZ',
    database: 'sql5720642',
    port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL database:', err);
    return;
  }
  console.log('Successfully connected to MySQL database.');
});

app.use(express.static(path.join(__dirname, 'build')));
app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

app.get('/api/items', (req, res) => {
  const query = 'SELECT name, description, price, image, type FROM JCKICKS';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.post('/Contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = "INSERT INTO ContactMessages (`name`, `email`, `phone`, `subject`, `message`) VALUES (?)";
  const values = [name, email, phone, subject, message];

  connection.query(sql, [values], (err, data) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Form submitted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
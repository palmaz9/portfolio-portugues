// app.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for your pages
app.get('/', (req, res) => {
  res.render('index', { title: 'Main Page' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

app.get('/references', (req, res) => {
  res.render('references', { title: 'References' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

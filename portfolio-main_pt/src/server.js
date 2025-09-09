// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Define a route for the root URL (optional, redirects to /projects)
app.get('/', (req, res) => {
    res.redirect('/projects'); // Redirect to /projects
});

// Define a route to render the 'projects' page
app.get('/projects', (req, res) => {
    res.render('projects');  // Render the 'projects.ejs' file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const path = require('path');
const { getProjects } = require('./models/db'); // Import the getProjects function
require('dotenv').config();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/resume', (req, res) => {
  res.render('resume');
});

// Projects route to fetch data from MySQL
app.get('/projects', async (req, res) => {
  try {
    const projects = await getProjects(); // Fetch projects from the database
    res.render('projects', { projects }); // Render the 'projects' page with the data
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).send('Server error');
  }
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require('express');
const router = express.Router();
const fs = require('fs');

// Home
router.get('/', (req, res) => {
  res.render('index');
});

// About
router.get('/about', (req, res) => {
  res.render('about');
});

// Contact
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Projects
router.get('/projects', (req, res) => {
  const projects = [
    { title: 'Portfolio Website', description: 'A modern responsive website using EJS.' },
    { title: 'Todo App', description: 'A simple task manager built with Node.js.' }
  ];
  res.render('projects', { projects });
});

module.exports = router;

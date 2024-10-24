// const express = require('express');
// const app = express();

// // Define the port
// const PORT = 3000;

// // Create a basic route
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });




// FRAMEWORK CONFIGURATION
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/dbConnection.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.set('view engine', 'hbs');

app.get('/home', (req, res) => {
  res.render('home', { username: 'Krishna' });
});

app.get('/users', (req, res) => {
  res.render('users', {
    people: [
      { username: 'Krishna', age: 20 },
      { username: 'Lakshay', age: 21 },
    ],
  });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

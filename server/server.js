import express from "express";
import { connectDb } from "./config/dbConnection.js"; // Ensure this path is correct
// import errorHandler from "./middleware/errorHandler.js"; // Ensure this path is correct
import cors from "cors";
// import dotenv from "dotenv";

// Initialize dotenv for environment variables
// dotenv.config();

// Create an Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// // Error handling middleware
// app.use(errorHandler);

// Connect to the database
connectDb();

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
});
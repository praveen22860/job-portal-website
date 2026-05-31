import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // CLOUDINARY_CLIENT_NAME
  api_key: process.env.CLOUDINARY_API_KEY,       // CLOUDINARY_CLIENT_API
  api_secret: process.env.CLOUDINARY_API_SECRET, // CLOUDINARY_CLIENT_SECRET
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const app1 = express();

// // Use the PORT provided by Render or fallback to 5000 locally
// const PORT = process.env.PORT || 5000; 

// app1.use(cors({
//   origin: process.env.FRONTEND_URL, // This environment variable will be set in Render
//   credentials: true
// }));

// Ensure your database connection references process.env.DATABASE_URL or process.env.MONGO_URI



//update front end api url



// import axios from 'axios';

// const API = axios.create({ 
//   baseURL: import.meta.env.VITE_API_URL 
// });

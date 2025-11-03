import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";

// App config

const app = express();
const port = process.env.PORT || 8000;
connectDB();
// connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoint

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`your server is running on http://localhost:${port}`);
});

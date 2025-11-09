import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import placeOrderRouter from "./routes/orderRoute.js";

// App config

const app = express();
const port = process.env.PORT || 8000;
connectCloudinary();
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoint

app.use("/api/user", userRouter);
app.use("/api/v1/product", productRoute);
app.use("/api/user/cart", cartRouter);
app.use("/api/Order", placeOrderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`your server is running on http://localhost:${port}`);
});

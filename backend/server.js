import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

//Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/indiecrate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// PRODUCT SCHEMA & ROUTE
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discount: Number,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//USER SCHEMA & ROUTES
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
});

const User = mongoose.model("User", userSchema);

//REGISTER
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, phone, address });
    await newUser.save();

    res.status(201).json({
      message: "Registration successful",
      user: { name, email, phone, address },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



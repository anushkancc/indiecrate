// This brings in the tools we need for our server
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";

// This starts our server app
const app = express();
const PORT = 5000; // The number where our server will run

// These lines help our server read data and talk to the frontend
app.use(cors()); // Allows frontend to talk to backend safely
app.use(express.json()); // Lets server read JSON data sent by frontend

// This connects our app to the MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/indiecrate", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected")) // Shows message when connection works
  .catch((err) => console.error("MongoDB connection error:", err)); // Shows message if connection fails

// This part tells MongoDB how each product will look
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discount: Number,
  category: String,
  image: String,
});

// This creates a group in the database for products
const Product = mongoose.model("Product", productSchema);

// This gets all products from the database when someone visits /products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Looks for all products
    res.json(products); // Sends the product list to frontend
  } catch (error) {
    res.status(500).json({ message: error.message }); // Shows error if something goes wrong
  }
});

// This tells MongoDB how each user will look
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // No two users can have same email
  password: String,
  phone: String,
  address: String,
});

// This creates a group in the database for users
const User = mongoose.model("User", userSchema);

// This route is used when a new user signs up
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Checks if required details are given
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    // Checks if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Makes password safe by changing it into a secret code
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creates a new user and saves it in the database
    const newUser = new User({ name, email, password: hashedPassword, phone, address });
    await newUser.save();

    // Sends back a success message without showing the password
    res.status(201).json({
      message: "Registration successful",
      user: { name, email, phone, address },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// This route is used when a user tries to log in
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checks if user with that email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Checks if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Sends back success message with user details (no password)
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

// This starts the server and shows message when it is running
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

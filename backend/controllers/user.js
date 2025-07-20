import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    const tokenData = {
        id: user._id,
        email: user.email
    }
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.status(200).json({ message: "Login successful", user: { user: user } });
};

const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const user = await userModel.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ fullName, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully", user: { fullName, email } });
}
const logoutUser = (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
};

export { registerUser, loginUser, logoutUser };
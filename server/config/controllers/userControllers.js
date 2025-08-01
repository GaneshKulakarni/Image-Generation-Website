import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }


        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists with this email" });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = {
            name,
            email,
            password: hashedPassword
        }
        const newUser = new userModel(userData);
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(201).json({ success: true, token, user: { name: user.name } })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });


        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password);


        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.json({ success: true, token, user: { name: user.name } })
        }
        else {
            return res.status(401).json({ success: false, message: "Invalid password" })
        }  
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }


}


const userCredits = async (req, res) => {
    try {
        const userId = req.user.id; // <-- Use user from JWT
        const user = await userModel.findById(userId);


        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }


        res.json({
            success: true,
            credits: user.creditBalance || 0,
            user: { name: user.name }
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}
export {registerUser,loginUser,userCredits}

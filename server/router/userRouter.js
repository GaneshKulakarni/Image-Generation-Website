import express from "express";
import userControllers from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.post('/register', userControllers.registerUser);
userRouter.post('/login', userControllers.loginUser);

export default userRouter;


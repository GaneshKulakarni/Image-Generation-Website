import express from "express";
import {registerUser,loginUser,userCredits, paymentRazorpay,verifyRazorpay} from '../controllers/userControllers.js';
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credit', userAuth,userCredits);
userRouter.post('/pay-razor', userAuth,paymentRazorpay);
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter;


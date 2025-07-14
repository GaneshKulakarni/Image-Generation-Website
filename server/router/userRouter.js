import express from "express";
import { registerUser, loginUser } from "../controllers/userControllers";
import { Router } from "express";

const userRouter  = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser)

export default userRouter;
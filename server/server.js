import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import userRouter from "./router/userRouter.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

// Connect to database and start server
const startServer = async () => {
    try {
        await connectDB();
        console.log("Database connected successfully");
        
        app.use('/api/user', userRouter);

        app.get("/", (req, res) => { 
            res.send("Server is running");
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();







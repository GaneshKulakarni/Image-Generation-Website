import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import userRouter from "./router/userRouter.js";
import ImageRouter from "./router/ImageRouters.js";

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());

// Connect to database and start server
const startServer = async () => {
    try {
        const connection = await connectDB();
        if (!connection) {
            throw new Error('Database connection failed');
        }
        
        // Set up routes
        app.use('/api/user', userRouter);
        app.use('/api/image', ImageRouter);

        // Root route
        app.get("/", (req, res) => { 
            res.send("Server is running");
        });

        // Error handling middleware
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send({ message: 'Something went wrong!', error: err.message });
        });

        // Start server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();







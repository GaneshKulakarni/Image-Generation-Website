import mongoose from "mongoose";
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database is connected")
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/image_Generation`);
        return mongoose.connection;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}
export default connectDB;
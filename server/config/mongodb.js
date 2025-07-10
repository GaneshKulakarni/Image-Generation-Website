import mongoose from "mongoose";
const connectDB = async () => {

    mongoose.connection.on('connected', () => {
            console.log("Database is connnected")
    })

 await mongoose.connect(`${process.env.MONGODB_URI}/image_Generation`);

}
export default connectDB;
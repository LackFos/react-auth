import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("⚡ Database connected");
  } catch (error) {
    console.error(`⚠️ Failed to connect database : ${error}`);
  }
};

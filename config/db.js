import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_LOCAL_URL);
  } catch (error) {
    console.log(`MongoDb error ${error}`);
  }
};

export default connectDb;

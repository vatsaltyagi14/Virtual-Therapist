import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  // Set Mongoose to use strict query mode. This helps prevent querying for
  // fields that are not defined in the schema.
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again.
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  // Connect to MongoDB using the URI from our environment variables.
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;

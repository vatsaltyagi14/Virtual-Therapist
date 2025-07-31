import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
  },
  image: {
    type: String,
  },
  // You can add more fields here later, for example:
  // conversationHistory: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Conversation' 
  //   }
  // ]
});

// The 'models.User' check prevents Mongoose from redefining the model
// every time it's accessed in a serverless environment.
const User = models.User || model('User', UserSchema);

export default User;

import mongoose from 'mongoose';
const {Schema} = mongoose;

const todoItemSchema = new Schema({
  title: String,
  task: String,
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

export default mongoose.model('TodoItem', todoItemSchema);

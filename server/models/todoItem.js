import mongoose from 'mongoose';
const {Schema} = mongoose;

const todoItemSchema = new Schema({
  title: {type: String, required: true},
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('TodoItem', todoItemSchema);

import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    minLength: [5, 'min length 5'],
    maxLength: [12, 'max length 12'],
    unique: [true, 'username is taken']},
  password: String,
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'must be a valid email address'],
    unique: [true, 'username is taken']}});

export const passwordValid = (string) => {
  // eslint-disable-next-line max-len
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const result = string.search(regex);
  if (result === 0) return true;
  return false;
};

export const User = mongoose.model('User', userSchema);

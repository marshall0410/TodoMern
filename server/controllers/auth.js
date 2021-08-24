import {User, passwordValid} from '../models/user.js';
import Bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
  const {username, password, email} = req.body;
  if (!(username && password && email)) {
    const message = 'username, password, and email are required';
    return res.status(400).json({message});
  }

  const validPassword = passwordValid(password);
  if (!validPassword) {
    const error = {
      error: {
        message: 'Invalid Password',
        rules: [
          'At least one upper case letter',
          'At least one lower case letter',
          'At least one digit',
          'At least one special character',
          'Minimum eight in length']}};

    return res.status(400).json(error);
  }

  try {
    const user = new User({username, password, email});
    user.password = await generateHash(password);
    await user.save();
    const token = generateToken(user);
    return res.status(201).json({token});
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({message: error.message});
    } else if (error.code === 11000) {
      return res.status(409).json(
          {error:
          {
            value: error.keyValue,
            message: 'Must be unique',
          }});
    } else {
      console.log(error);
      return res.status(500);
    }
  }
};


export const signIn = async (req, res) => {
  const {username, email, password} = req.body;
  if (!username && !email) return res.sendStatus(400);
  const user = await User.findOne({$or: [{username}, {email}]});
  if (!user) {
    const message = 'unable to login with credentials provided';
    return res.status(404).json(message);
  }


  const match = await Bcrypt.compare(password, user.password);
  if (!match) {
    const message = 'unable to login with credentials provided';
    return res.status(404).json({message});
  }

  const token = generateToken(user);
  return res.status(200).json({token});
};


const generateToken = (userModel) => {
  const user = userModel.toObject();
  const uid = {uid: user._id};
  return Jwt.sign(uid, process.env.TOKEN_SECRET, {expiresIn: '1h'});
  // return Jwt.sign(uid, process.env.TOKEN_SECRET, {expiresIn: '30s'});
};


const generateHash = async (password) => {
  const salt = await Bcrypt.genSalt(10);
  return await Bcrypt.hash(password, salt);
};

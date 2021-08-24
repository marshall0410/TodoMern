import mongoose from 'mongoose';
import TodoItem from '../models/todoItem.js';

export const getTodoItems = async (req, res) => {
  try {
    const filter = {uid: req.uid};
    const todoItems = await TodoItem.find(filter);
    if (!todoItems) {
      return res.status(404).json({message: 'Todo items not found'});
    };

    return res.status(200).json(todoItems);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
};


export const getTodoItem = async (req, res) => {
  try {
    console.log(req.user);
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No post with id: ${id}`);
    };
    const filter = {_id: req.params.id, uid: req.uid};
    const todoItem = await TodoItem.findOne(filter);
    return res.status(200).json(todoItem);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
};


export const createTodoItem = async (req, res) => {
  try {
    const {title, task} = req.body;
    const todoItem = await TodoItem.create({title, task, uid: req.uid});
    const json = JSON.stringify(todoItem);
    return res.status(201).json(json);
  } catch (error) {
    if (error._message === 'TodoItem validation failed') {
      const keys = Object.keys(error.errors);
      const errors = [];
      keys.forEach((item) => errors.push(error.errors[item]));
      const message = {message: error._message, errors};
      return res.status(400).json(message);
    }
    return res.status(404).json({message: error.message});
  }
};


export const updateTodoItem = async (req, res) => {
  try {
    const {task, title, completed, _id} = req.body;
    if (req.params.id != _id) {
      return res.sendStatus(400);
    } else {
      const filter = {_id, uid: req.uid};
      const update = {task, title, completed};
      const updatedItem = await TodoItem.findOneAndUpdate(
          filter,
          update,
          {
            new: true,
          },
      );
      return res.status(200).json(updatedItem);
    }
  } catch (error) {
    if (error._message === 'TodoItem validation failed') {
      const keys = Object.keys(error.errors);
      const errors = [];
      keys.forEach((item) => errors.push(error.errors[item]));
      const message = {message: error._message, errors};
      return res.status(400).json(message);
    }
    return res.status(404).json({message: error.message});
  }
};


export const deleteTodoItem = async (req, res) => {
  try {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({message: `No post with id: ${id}`});
    }
    const filter = {id, uid: req.uid};
    await TodoItem.findOneAndRemove(filter);
    res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
};

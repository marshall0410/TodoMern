import TodoItem from '../models/todoItem.js';
import mongoose from 'mongoose';

export const getTodoItems = async (req, res) => {
  try {
    const todoItems = await TodoItem.find();
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
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No post with id: ${id}`);
    }
    const todoItem = await TodoItem.findOne({_id: req.params.id});
    return res.status(200).json(todoItem);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
};

export const createTodoItem = async (req, res) => {
  try {
    const {title, task} = req.body;
    const todoItem = await TodoItem.create({title, task});
    const json = JSON.stringify(todoItem);
    return res.status(201).json(json);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
};

export const updateTodoItem = async (req, res) => {
  try {
    const {task, title, completed, _id} = req.body;
    if (req.params.id != _id) {
      return res.status(400).json({message: 'bad request'});
    } else {
      const updatedItem = await TodoItem.findOneAndUpdate(
          _id,
          {task, title, completed},
          {
            new: true,
          },
      );
      return res.status(200).json(updatedItem);
    }
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const deleteTodoItem = async (req, res) => {
  try {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No post with id: ${id}`);
    }
    await TodoItem.findByIdAndRemove(id);
    res.json({message: 'Post deleted successfully.'});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

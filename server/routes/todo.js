import express from 'express';
import {getTodoItems,
  getTodoItem,
  createTodoItem,
  updateTodoItem,
  deleteTodoItem,
} from '../controllers/todo.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', getTodoItems);
router.get('/:id', getTodoItem);
router.post('/', createTodoItem);
router.patch('/:id', updateTodoItem);
router.delete('/:id', deleteTodoItem);

export default router;

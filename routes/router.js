import express, { Router } from 'express';
import {
  addTodo,
  getAllTodos,
  toggeleTodoDone,
  updateTodo,
  deleteTodo
} from '../controller/todo-controller.js';


const router = express.Router();

router.post('/todos', addTodo);
router.get('/todos', getAllTodos);
router.get('/todos/:id', toggeleTodoDone);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;

import axios from 'axios';
import {base} from './urls';

const url = base+'/Todo/';

export const fetchTodo = () => axios.get(url);
export const createTodo = item => axios.post(url, item);
export const deleteTodo = (id) => axios.delete(url+id);
export const updateTodo = item => axios.patch(url+item._id, item);
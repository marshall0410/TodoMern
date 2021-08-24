import axios from 'axios';
import {baseURL} from './urls';

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const fetchTodo = () => API.get('/Todo');
export const createTodo = item => API.post('/Todo', item);
export const deleteTodo = id => API.delete(`/Todo/${id}`);
export const updateTodo = item => API.patch(`/Todo/${item._id}`, item);
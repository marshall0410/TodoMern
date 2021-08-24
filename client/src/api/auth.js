import axios from 'axios';
import { baseURL } from './urls';

const API = axios.create({ baseURL });

export const signIn = (formData) => API.post('/auth/sign-in', formData);
export const signUp = (formData) => API.post('/auth/sign-up', formData);

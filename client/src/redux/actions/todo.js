import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../actions/actiontypes/todo";
import * as api from '../../api/todo'


export const getTodo = () => async(dispatch) => {
    try {
        const { data } = await api.fetchTodo();
        dispatch({type: FETCH_ALL, payload:data});
    } catch (error){
        console.log(error.message);
    }
};

export const deleteTodo = (id) => async(dispatch) => {
    try{
        await api.deleteTodo(id);
        dispatch({type:DELETE, payload:id});
    } catch(error){
        console.log(error.message);
    }
}

export const createTodo = (item) => async(dispatch) => {
    try{
        const response = await api.createTodo(item);
        const data = JSON.parse(response.data);
        dispatch({type:CREATE, payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const updateTodo = (item) => async(dispatch) => {
    try{
        const response = await api.updateTodo(item);
        //const data = JSON.parse(response.data);
        dispatch({type:UPDATE, payload: response.data});
    } catch(error){
        console.log(error.message);
    }
}

//export const deleteTodo = () => async(dispatch) =>
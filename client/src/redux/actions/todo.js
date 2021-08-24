import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../actions/actiontypes/todo";
import { NOTIFICATION_ERROR, NOTIFICATION_SUCCESS } from './actiontypes/notification';
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
        dispatch({type:NOTIFICATION_SUCCESS, 'message':'Item has been removed.'});
    } catch(error){
        console.log(error.message);
    }
}

export const createTodo = (item) => async(dispatch) => {
    try{
        const response = await api.createTodo(item);
        const data = JSON.parse(response.data);
        dispatch({type:CREATE, payload: data});
        dispatch({type:NOTIFICATION_SUCCESS, 'message':'Item has been created.'});
    } catch(error){
        console.log(error.message);
    }
}

export const updateTodo = (item) => async(dispatch) => {
    try{
        const response = await api.updateTodo(item);
        //const data = JSON.parse(response.data);
        dispatch({type:UPDATE, payload: response.data});
        dispatch({type:NOTIFICATION_SUCCESS, 'message':'Item has been updated.'});
    } catch(error){
        console.log(error.message);
    }
}

//export const deleteTodo = () => async(dispatch) =>
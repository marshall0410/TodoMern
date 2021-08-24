import * as api from '../../api/auth';
import { SET_AUTH, LOGOUT } from '../actions/actiontypes/auth';
import { NOTIFICATION_ERROR } from './actiontypes/notification'


export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: SET_AUTH, data: data.token }); 
    router.push('/home');
  } catch (error) {
    const statusCode = error.response.status;
    if(statusCode === 404){
      dispatch({type:NOTIFICATION_ERROR, 'message':'Unable to authenticate with credentials provided.'})
    } else {
      dispatch({type:NOTIFICATION_ERROR, 'message':'An unexpected error occured. Please try again later.'})
      console.log(error);
    }
  }
};

export const newAccount = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: SET_AUTH, data:data.token });  
    router.push('/home');
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode === 409) { 
      const value = error.response.data.error.value;
      const property = Object.keys(value)[0];
      const field = value[property];
      dispatch({type:NOTIFICATION_ERROR, 'message':`An account with the ${property} "${field}" already exists.`});
    }
  }
};



export const logout = (router) => async (dispatch) => {
  dispatch({type:LOGOUT});
  router.push('/');
}
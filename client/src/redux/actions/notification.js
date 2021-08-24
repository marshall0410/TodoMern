import { NOTIFICATION_CLOSE, 
         NOTIFICATION_ERROR, 
         NOTIFICATION_WARNING, 
         NOTIFICATION_INFO, 
         NOTIFICATION_SUCCESS } from './actiontypes/notification';

export const notificationError = (data) => (dispatch) => {
    dispatch({type: NOTIFICATION_ERROR, data});
}

export const notificationWarning = (data) => (dispatch) => {
    dispatch({type: NOTIFICATION_WARNING, data});
}

export const notificationInfo = (data) => (dispatch) => {
    dispatch({type: NOTIFICATION_INFO, data});
}

export const notificationSuccess = (data) => (dispatch) => {
    dispatch({type: NOTIFICATION_SUCCESS, data});
}

export const notificationtClose = () => (dispatch) => {
    dispatch({type: NOTIFICATION_CLOSE});
}
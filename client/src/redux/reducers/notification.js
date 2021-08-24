import { NOTIFICATION_ERROR, NOTIFICATION_WARNING, NOTIFICATION_INFO, NOTIFICATION_SUCCESS, NOTIFICATION_CLOSE} from "../actions/actiontypes/notification";

const reducer = (state = {activated:false}, action) => {
    switch(action.type){
        case NOTIFICATION_CLOSE:
            return {activated: false }
        case NOTIFICATION_ERROR:
            return {activated: true, severity: 'error', message:action.message, color: 'rgb(245 86 74)'}
        case NOTIFICATION_WARNING:
            return {activated: true, severity: 'warning', message:action.message, color: 'rgb(255 162 25)'}
        case NOTIFICATION_INFO:
            return {activated: true, severity: 'info', message:action.message, color: 'rgb(55 160 244)'}
        case NOTIFICATION_SUCCESS:
            return {activated: true, severity: 'success', message:action.message, color: 'rgb(76 175 80)'}
        default:
            return state;
    }
}

export default reducer;
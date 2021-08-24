import { SET_AUTH, LOGOUT } from '../actions/actiontypes/auth';

const reducer = (state = { authData: null }, action) => {
    switch (action.type) {
      case SET_AUTH:
        localStorage.setItem('token', action.data );  
        return {authData: action.data};
      case LOGOUT:
        localStorage.removeItem('token');  
        return {authData: null};
      default:
        return state;
    }
  };
  
  export default reducer;
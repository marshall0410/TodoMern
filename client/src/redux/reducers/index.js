import {combineReducers} from 'redux';

import todo from './todo';
import auth from './auth';
import notification from './notification';

export default combineReducers({todo, auth, notification});
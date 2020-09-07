import {combineReducers} from 'redux';
import students from './student';
import auth from './auth';
export default combineReducers({
    students,
    auth
})


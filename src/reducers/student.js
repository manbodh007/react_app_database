import {
    UPDATE_STUDENT
} from '../actions/actionTypes';

export default function student(state=[],action){
    switch(action.type){
        case UPDATE_STUDENT:
         return action.students
        default:
            return state
    }
}
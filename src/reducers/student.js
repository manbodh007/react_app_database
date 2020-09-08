import { UPDATE_STUDENT, CREATE_STUDENT } from "../actions/actionTypes";

export default function student(state = [], action) {
  switch (action.type) {
    case UPDATE_STUDENT:
      return action.students;
    case CREATE_STUDENT:
      return [action.student, ...state];
    default:
      return state;
  }
}

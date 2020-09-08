import {
  FETCH_INTERVIEW,
  CREATE_INTERVIEW,
  SELECT_FOR_INTERVIEW,
  CHANGE_INTERVIEW_RESULT,
} from "../actions/actionTypes";

export default function interview(state = [], action) {
  switch (action.type) {
    case FETCH_INTERVIEW:
      return action.data;
    case CREATE_INTERVIEW:
      return [action.data, ...state];
    case SELECT_FOR_INTERVIEW:
      const newState = state.filter((interview) => {
        if (interview._id == action.id) {
          const state1 = interview.students.filter((student) => {
            return student._id != action.student._id;
          });

          interview.selected = [...interview.selected, action.student];
          interview.interviewInfo = action.interviewInfo;
          interview.students = state1;
          return interview;
        }
        return interview;
      });
      return newState;
    case CHANGE_INTERVIEW_RESULT:
         return action.result
    default:
      return state;
  }
}

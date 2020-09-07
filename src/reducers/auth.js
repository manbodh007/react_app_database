import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH,
  SIGN_UP_SUCCESS,
} from "../actions/actionTypes";

const intialState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};

export default function auth(state = intialState, action) {
  switch (action.type) {
    case CLEAR_AUTH:
        return {
            ...state,
            error:null,
        }
    case USER_LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        inProgress: false,
      };
    case USER_LOGIN_FAILED:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: action.message,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        inProgress: false,
      };
    case LOG_OUT:
        return {
            ...state,
            user:{},
            error:null,
            isLoggedIn:false,
            inProgress:false,
        }
    
    default:
      return state;
  }
}

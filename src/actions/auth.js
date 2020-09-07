import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_AUTH,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
} from "./actionTypes";
import { Api_url } from "../helpers/url";
import { getFormBody } from "../helpers/utils";

export function startLogin() {
  return {
    type: USER_LOGIN_START,
  };
}

export function loginSuccess() {
  return {
    type: USER_LOGIN_SUCCESS,
  };
}
export function loginFailed(message) {
  return {
    type: USER_LOGIN_FAILED,
    message
  };
}

export function loginUser(data) {
  return (dispatch) => {
     dispatch(startLogin());
    let url = Api_url.userLogin();
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("login data", data);
        if (data.success) {
          localStorage.setItem("token", data.token);
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailed(data.message));
        }
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user
  };
}

export function logout(){
    return {
        type:LOG_OUT,
    }
}
export function clearAuthState(){
    return {
        type:CLEAR_AUTH
    }
}
export function signUp(data){
    return (dispatch)=>{
       let url = Api_url.userSignUp();
       fetch(url,{
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody(data),
       })
       .then(response =>response.json())
       .then(data=>{
           console.log('new employees data',data);
           dispatch(signupUser(data.message))
       })
    }
}

export function signupUser(message){
    return {
       type:SIGN_UP_SUCCESS,
       message
    }
}



import {
  FETCH_INTERVIEW,
  CREATE_INTERVIEW,
  SELECT_FOR_INTERVIEW,
  CHANGE_INTERVIEW_RESULT,
} from "./actionTypes";
import { Api_url } from "../helpers/url";
import { getFormBody, getAuthToken } from "../helpers/utils";
import interview from "../reducers/interview";

export function fetchSuccess(data) {
  return {
    type: FETCH_INTERVIEW,
    data,
  };
}
export function fetchInterviews() {
  return (dispatch) => {
    let url = Api_url.fetchInterview();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("interviews data", data);
        if (data.success) {
          dispatch(fetchSuccess(data.interviews));
        }
      });
  };
}
export function createInterview(data) {
  return (dispatch) => {
    const url = Api_url.createInterview();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: getFormBody(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("new interview data", data);
        if (data.success) {
          dispatch(createNewInterview(data.interview));
        }
      });
  };
}
export function createNewInterview(data) {
  return {
    type: CREATE_INTERVIEW,
    data,
  };
}

export function selectStudent(interview_id, student_id) {
  return (dispatch) => {
    const url = Api_url.selectStudent(interview_id, student_id);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "none",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("selected student data", data);
        if (data.success) {
          dispatch(
            selectStudentForInterview(
              data.student,
              interview_id,
              data.interview.interviewInfo
            )
          );
        }
      });
  };
}
export function selectStudentForInterview(student, id, interviewInfo) {
  return {
    type: SELECT_FOR_INTERVIEW,
    student,
    id,
    interviewInfo,
  };
}
export function changeInterviewResult(student_id, interview_id,status) {
  console.log("fetch function");
  console.log(student_id,interview_id,);
  return (dispatch) => {
    const url = Api_url.changeInterviewResult(interview_id,student_id,status);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "none",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("changed interview result data", data);
        if (data.success) {
          dispatch(changeResult(data.interview));
        }
      });
  };
}

export function changeResult(result){
  return {
    type:CHANGE_INTERVIEW_RESULT,
    result,  
  };
}

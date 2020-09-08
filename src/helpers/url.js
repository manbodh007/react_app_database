const API_ROOT = "http://localhost:9000";

export const Api_url = {
  fetchStudent: () => `${API_ROOT}/student/all`,
  userLogin: () => `${API_ROOT}/employees/log-in`,
  userSignUp: () => `${API_ROOT}/employees/sign-up`,
  createStudent: () => `${API_ROOT}/student/create`,
  fetchInterview: () => `${API_ROOT}/interview/all`,
  createInterview: () => `${API_ROOT}/interview/create`,
  selectStudent: (interview_id, student_id) =>
    `${API_ROOT}/interview/select/student?interview_id=${interview_id}&&student_id=${student_id}`,
  changeInterviewResult :(interview_id, student_id,status) =>
  `${API_ROOT}/interview/changeResult?interview_id=${interview_id}&&student_id=${student_id}&&status=${status}`,
};

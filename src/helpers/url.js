const API_ROOT = 'http://localhost:9000';

export const Api_url ={
    fetchStudent:()=>`${API_ROOT}/student/all`,
    userLogin:()=>`${API_ROOT}/employees/log-in`,
    userSignUp :()=>`${API_ROOT}/employees/sign-up`
}
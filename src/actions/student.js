import{
    UPDATE_STUDENT,
    CREATE_STUDENT,

} from './actionTypes';
import { Api_url } from '../helpers/url';
import { getFormBody,getAuthToken} from "../helpers/utils";


export function updateStudent(students){
    return {
        type:UPDATE_STUDENT,
        students
    }
}
export function createNewStudent(student){
   return {
       type:CREATE_STUDENT,
       student
   }
}
export function createStudent(data){
    return (dispatch)=>{
        const url = Api_url.createStudent();
        fetch(url,{
            method: 'POST',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${getAuthToken()}`,
            },
            body: getFormBody(data),
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('new student data',data);
            if(data.success){
                dispatch(createNewStudent(data.student))
            }
        })
        
    }
}


export function fetchStudent(){
   return (dispatch) => {
      const url = Api_url.fetchStudent();
      fetch(url)
      .then(response =>response.json())
      .then(data =>{
          console.log('student data',data);
          if(data.success){
              dispatch(updateStudent(data.students))
          }
      });
   }
};
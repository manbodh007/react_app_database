import{
    UPDATE_STUDENT

} from './actionTypes';
import { Api_url } from '../helpers/url';


export function updateStudent(students){
    return {
        type:UPDATE_STUDENT,
        students
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
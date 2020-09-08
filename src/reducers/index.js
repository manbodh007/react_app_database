import { combineReducers } from "redux";
import students from "./student";
import auth from "./auth";
import interviews from "./interview";
export default combineReducers({
  students,
  auth,
  interviews,
});

import { combineReducers } from "redux";
import deciveReducer from "./decive/deciveReducer";
const rootReducer = combineReducers({
  list: deciveReducer,
});
export default rootReducer;

import {combineReducers} from "redux";
import jobPostsReducer from "./jobPostsReducer";




export default combineReducers({
jobPost:jobPostsReducer
   
})
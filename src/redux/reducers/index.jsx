import { combineReducers } from "redux";
import { productReducer, userReducer } from "./userReducer";

 const reducers=combineReducers({
    user:userReducer,
    data:productReducer
})
export default reducers
import { combineReducers } from "redux";
import { logReducer } from "./bmw/reducer";

export default combineReducers({
    logState: logReducer
})
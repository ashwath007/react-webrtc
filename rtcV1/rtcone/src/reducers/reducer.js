import { combineReducers } from "redux";
import dashBoardReducer from "./dashBoardReducer";
import callReducer from "./callReducer"

export default combineReducers({
    dashboard: dashBoardReducer,
    call: callReducer
})
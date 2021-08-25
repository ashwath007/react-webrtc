import { SER_USER_NAME } from "../actions/action.types";
import { setUserName } from "../actions/dashBoardAction";


const initialState = {
    user: null,
    loading: true,
    error: false,
}


const dashBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SER_USER_NAME":
            return {
                ...state,
                user: action.username
            }
        default:
            return state
    }
}

export default dashBoardReducer;
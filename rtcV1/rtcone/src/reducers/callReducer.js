import { CALL_LOCAL_STREAM } from "../actions/callLocalStream";



const initialState = {
    localStream: []
}


const callReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CALL_LOCAL_STREAM":
            return {
                ...state,
                localStorage: action.localStorage
            }
        default:
            return state;

    }
}
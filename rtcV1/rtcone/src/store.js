import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers/reducer'


const store = createStore(
    mainReducer,
    composeWithDevTools(

    )
)

export default store;
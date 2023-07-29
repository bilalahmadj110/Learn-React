import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers'
import {ADD_TODO} from "../actions/actionTypes";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware())
)

export default store
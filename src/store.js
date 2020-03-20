
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
const middleware = composeWithDevTools(applyMiddleware(createPromise(),thunk));
export default createStore(rootReducer, middleware);
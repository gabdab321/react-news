import {combineReducers, createStore} from "redux";
import {menuReducer} from "./reducers/menuReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    menu: menuReducer,

})

export const store = createStore(rootReducer, composeWithDevTools())
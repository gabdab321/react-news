import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {menuReducer} from "./reducers/menuReducer";
import {categoryReducer} from "./reducers/categoryReducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    category: categoryReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
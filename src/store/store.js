import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {menuReducer} from "./reducers/menuReducer";
import {categoryReducer} from "./reducers/categoryReducer";
import {paginationReducer} from "./reducers/pagintaionReducer";
import {newsReducer} from "./reducers/newsReducer";

const rootReducer = combineReducers({
    news: newsReducer,
    menu: menuReducer,
    category: categoryReducer,
    pagination: paginationReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
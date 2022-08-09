import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {menuReducer} from "./reducers/menuReducer";
import {categoryReducer} from "./reducers/categoryReducer";
import {paginationReducer} from "./reducers/pagintaionReducer";
import {newsReducer} from "./reducers/newsReducer";
import {countryReducer} from "./reducers/countryReducer";

const rootReducer = combineReducers({
    country: countryReducer,
    news: newsReducer,
    menu: menuReducer,
    category: categoryReducer,
    pagination: paginationReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
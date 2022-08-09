const defaultValue = {news: []}

const SET_NEWS = "SET_NEWS"

export function newsReducer(state = defaultValue, action) {
    switch (action.type) {
        case "SET_NEWS":
            return {news: action.payload}

        default:
            return state
    }
}

export const setNews = payload => ({type: SET_NEWS, payload: payload})
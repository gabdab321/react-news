const defaultValue = {currenCategory: "general"}

const CHANGE_CATEGORY = "CHANGE_CATEGORY"

export function categoryReducer(state = defaultValue, action) {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return {currenCategory: action.payload}

        default:
            return state
    }
}

export const changeCategoryAction = payload => ({type: CHANGE_CATEGORY, payload: payload})
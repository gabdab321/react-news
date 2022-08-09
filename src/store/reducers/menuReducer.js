const initialValue = {opened: false}

const SET_MENU = "SET_MENU"

function menuReducer(state = initialValue, action) {
    switch (action.type) {
        case "SET_MENU":
            return {opened: action.payload}

        default:
            return state
    }
}

export {menuReducer}
export const setMenuOpened = payload => ({type: SET_MENU, payload: payload})
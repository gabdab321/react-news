const initialValue = {opened: false}

const MENU_OPEN = "MENU_OPEN"
const MENU_CLOSE = "MENU_CLOSE"

function menuReducer(state = initialValue, action) {
    switch (action.type) {
        case "MENU_OPEN":
            return {opened: action.payload}

        case "MENU_CLOSE":
            return {opened: action.payload}

        default:
            return state
    }
}

export {menuReducer}
export const openMenuAction = () => ({type: MENU_OPEN, payload: true})
export const closeMenuAction = () => ({type: MENU_CLOSE, payload: false})
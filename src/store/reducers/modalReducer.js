const defaultValue = {opened: false}

const OPEN_MODAL = "OPEN_MODAL"
const CLOSE_MODAL = "CLOSE_MODAL"

export function modalReducer(state = defaultValue, action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return {opened: true}

        case "CLOSE_MODAL":
            return {opened: false}

        default:
            return state
    }
}

export const openModalAction = () => ({type: OPEN_MODAL, payload: ""})
export const closeModalAction = () => ({type: CLOSE_MODAL, payload: ""})

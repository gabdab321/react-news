const defaultValue = {offset: 0, currentPage: 0, total: 0, limit: 30}

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL = "SET_TOTAL"
const SET_OFFSET = "SET_OFFSET"
const RESET_PAGINATION = "RESET_PAGINATION"

export function paginationReducer(state = defaultValue, action) {
    switch (action.type) {
        case "RESET_PAGINATION":
            return {pageCount: 0, offset: 0, currentPage: 0, total: 0, limit: 30}

        case "SET_OFFSET":
            return {...state, offset: action.payload}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload}

        case "SET_TOTAL":
            return {...state, total: action.payload}

        default:
            return state
    }
}

export const setCurrentPageAction = payload => ({type: SET_CURRENT_PAGE, payload: payload})
export const setOffset = payload => ({type: SET_OFFSET, payload: payload})
export const setTotalAction = payload => ({type: SET_TOTAL, payload: payload})
export const resetPaginationAction = () => ({type: RESET_PAGINATION, payload: ""})
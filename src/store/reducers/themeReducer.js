const defaultValue = {currentTheme: "light_theme"}

const SET_LIGHT_THEME = "SET_LIGHT_THEME"
const SET_DARK_THEME = "SET_DARK_THEME"
const TOGGLE_THEME = "TOGGLE_THEME"

export function themeReducer(state = defaultValue, action) {
    switch (action.type) {
        case "SET_LIGHT_THEME":
            return {currentTheme: "light_theme"}

        case "SET_DARK_THEME":
            return {currentTheme: "dark_theme"}

        case "TOGGLE_THEME":
            return {currentTheme: state.currentTheme === "light_theme" ? "dark_theme" : "light_theme"}

        default:
            return state
    }
}

export const setLightTheme = () => ({type: SET_LIGHT_THEME, payload: ""})
export const setDarkTheme = () => ({type: SET_DARK_THEME, payload: ""})
export const toggleTheme = () => ({type: TOGGLE_THEME, payload: ""})
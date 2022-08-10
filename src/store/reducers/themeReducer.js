const defaultValue = {currentTheme: localStorage.getItem("theme") || "light_theme"}

const TOGGLE_THEME = "TOGGLE_THEME"

export function themeReducer(state = defaultValue, action) {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {currentTheme: state.currentTheme === "light_theme" ? "dark_theme" : "light_theme"}

        default:
            return state
    }
}

export const toggleTheme = () => ({type: TOGGLE_THEME, payload: ""})
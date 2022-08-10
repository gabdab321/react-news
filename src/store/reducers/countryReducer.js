import {COUNTRIES} from "../../consts/countries";

const defaultValue = {currentCountry: JSON.parse(localStorage.getItem("country")) || COUNTRIES[0]}

const SET_COUNTRY = "SET_COUNTRY"

export function countryReducer(state = defaultValue, action) {
    switch (action.type) {
        case "SET_COUNTRY":
            localStorage.setItem("country", JSON.stringify(action.payload))
            return {currentCountry: action.payload}

        default:
            return state
    }
}

export const setCountryAction = payload => ({type: SET_COUNTRY, payload: payload})
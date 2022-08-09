import {COUNTRIES} from "../../consts/countries";

const defaultValue = COUNTRIES[0]

const SET_COUNTRY = "SET_COUNTRY"

export function countryReducer(state = defaultValue, action) {
    switch (action.payload) {
        case "SET_COUNTRY":
            return COUNTRIES.find(country => country.countryCode === action.payload)

        default:
            return state
    }
}

export const setCountryAction = payload => ({type: SET_COUNTRY, payload: payload})
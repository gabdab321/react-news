import React from 'react';
import cl from "./CountrySelectTrigger.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {openModalAction} from "../../store/reducers/modalReducer";

const CountrySelectTrigger = () => {
    const dispatch = useDispatch()

    const currentCountry = useSelector(state => state.country.currentCountry)

    return (
        <div className={cl.trigger}>
            <div className={cl.trigger__body}>
                NOW YOU SEE NEWS FROM <img src={currentCountry.flagImageSrc} alt={currentCountry.countryCode}/>
            </div>
            <button className={cl.trigger__button} onClick={() => dispatch(openModalAction())}>CHANGE</button>
        </div>
    );
};

export default CountrySelectTrigger;
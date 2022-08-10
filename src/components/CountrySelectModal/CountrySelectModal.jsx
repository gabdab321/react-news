import React from 'react';
import cl from "./CountrySelectModal.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../store/reducers/modalReducer";
import {COUNTRIES} from "../../consts/countries";
import {setCountryAction} from "../../store/reducers/countryReducer";

const CountrySelectModal = () => {
    const dispatch = useDispatch()

    const selectedCountry = useSelector(state => state.country.currentCountry)
    const isModalOpened = useSelector(state => state.modal.opened)

    if(isModalOpened) {
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "visible"
    }

    function handleClick(e) {
        if(e.target.id !== "#modal-main") {
            return false
        }else{
            dispatch(closeModalAction())
        }
    }

    function renderCountry(country) {
        function onClick() {
            dispatch(setCountryAction(country))
            dispatch(closeModalAction())
        }

        const countryNameClassName = [cl["modal__country-name"], selectedCountry === country ? cl["link-selected"] : ""].join(" ")

        return(
            <div onClick={onClick} className={cl.modal__item} key={country.countryCode}>
                <img src={country.flagImageSrc} alt=""/>
                <p className={countryNameClassName}>{country.country}</p>
            </div>
        )
    }

    const className = [cl.modal, isModalOpened ? "" : cl["modal-closed"]].join(" ")

    return (
        <div onClick={handleClick} id="#modal-main" className={className}>
            <div className={cl.modal__body}>
                {COUNTRIES.map(renderCountry)}
            </div>
        </div>
    );
};

export default CountrySelectModal;
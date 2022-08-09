import React from 'react';
import cl from "./NavbarLink.module.scss"
import {BiNews} from "react-icons/bi";
import {useSelector} from "react-redux";

const NavbarLink = ({onClick, category, linkClassName}) => {
    const isSelected = useSelector(state => state.category.currenCategory) === category

    const className = [linkClassName, cl.link, isSelected ? cl.link__selected : ""].join(" ")

    return (
        <a
            href="#"
            onClick={onClick}
            className={className}
            data-category={category}
        >
            <BiNews className={cl.link__icon}/>{category}
        </a>
    );
};

export default NavbarLink;
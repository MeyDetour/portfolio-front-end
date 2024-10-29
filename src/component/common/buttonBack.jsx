import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const ButtonBack = ({link}) => {
   const location = useLocation()
   const isUrlContact = location.pathname ==="/contact";
    return (

        <>

            <Link className="backButton" to={link}>
                <img src={!isUrlContact?"/src/assets/images/icon/arrow.svg":"/src/assets/images/icon/blackArrow.svg"} alt="icone de fleche"/> Retour
            </Link>
            <Link className="backButtonSvgCroix" to={link}>
            <img src="/src/assets/images/icon/close.svg" className={"closeIcon"} alt="icone de la croix"/>
        </Link>
        </>
    );
};

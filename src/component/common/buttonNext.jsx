import React from 'react';
import {Link} from "react-router-dom";

export const ButtonNext = ({link,text}) => {
    return (

            <>

                <Link className="nextButton" to={link}> {text}
                    <img src="/assets/images/icon/nextArrow.svg" alt="icone de fleche"/>
                </Link>
</>
    );
};

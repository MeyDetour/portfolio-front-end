import React from 'react';
import {Link} from "react-router-dom";

export const ButtonBack = ({link}) => {
    return (

            <>

                <Link className="backButton" to={link}>
                    <img src="src/assets/images/icon/arrow.svg" alt="icone de fleche"/> Retour
                </Link>
</>
    );
};

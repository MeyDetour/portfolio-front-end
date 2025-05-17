import React from "react";
import {Link, Navigate} from "react-router-dom";
import '/public/css/home.css'
import '../../App.css'
import {useFetch} from "../../hooks/useApi.jsx";
import Loader from "../common/loader.jsx";
import {getMedias, getTexts} from "../../api/api.js";

export default function Wait() {


    return (
        <>
            <div className={`homePage alignCenter h100p " : ""}`}>

                <h1>Site web en reconstruction !</h1>
                <p>Veuillez me contacter a contact@meydetour.com ou contact@md-genos.com si vous avez un projet !</p>

            </div>


        </>
    );
}
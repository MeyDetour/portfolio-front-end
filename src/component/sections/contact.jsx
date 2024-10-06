import React from 'react';
import {useFetch} from "../../hooks/useApi.jsx";
import '../../assets/css/contact.css'
import Loader from "../common/loader.jsx";
import {Link} from 'react-router-dom';
import {getMedias} from "../../api/api.js";

export default function Contact() {

    const {data, loading, error} = useFetch(getMedias)
    if (loading) return <><Loader></Loader></>;

    if (error) return <p>Error: {error.message}</p>;

    return <>
        <div className="contactcontainer h100p">
            <div className="bandeau">
                <Link className="backButton" to="/">
                    <img src="src/assets/images/icon/blackArrow.svg" alt="icone de fleche"/> Retour
                </Link>
            </div>
            <div className="flexRow h100p">
                <div className="flexColAround alignCenter h100p mx-4">
                    {data.map((datum) => (
                        datum.link ? (
                            <a key={datum.id} href={datum.link} className="socialMedia" target="_blank">
                                <img className="mb-2" src={datum.image} alt={datum.imageName}/>
                                <span>{datum.display}</span>
                            </a>
                        ) : (
                            <div key={datum.id} className="socialMedia">
                                <img className="mb-2" src={datum.image} alt={datum.imageName}/>
                                <span>{datum.display}</span>

                            </div>
                        )


                    ))}

                </div>
                <div className="flexColAround alignCenter h100p ">
                   {/* <div className="w100p logoContainer alignCenter flexRowCenter  ">
                        <div>
                            <div className="rond rond1"></div>
                            <div className="rond rond2"></div>
                            <img className="img1" src="src/assets/images/logo/logo-part-1.svg" alt="logo partie 1"/>
                            <img className="img2" src="src/assets/images/logo/logo-part-2.svg" alt="logo partie 2"/>

                        </div>
                    </div>*/}
                    <div className="contactTexts flexCol alignCenter">
                        <h1 className="red">Me contacter</h1>
                        <p>
                            Je suis toujours ravi de rencontrer de nouvelles personnes et d'explorer de potentielles
                            opportunités. Que vous ayez des questions sur mes projets, que vous souhaitiez discuter
                            d'idées de collaboration ou simplement entrer en contact, je serais heureux de vous
                            entendre. </p>
                        <p>N'hésitez pas à me contacter via le formulaire ci-dessous ou par mes coordonnées fournies. Je
                            m'efforcerai de répondre à votre message dans les plus brefs délais.</p>
                        <Link className="button mt-3" to="/deroulement">Me contacter pour un projet</Link>
                    </div>
                </div>
            </div>


        </div>

    </>
}
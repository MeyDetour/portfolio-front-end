import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../../assets/css/home.css'
import '../../App.css'
import {useFetch} from "../../hooks/useApi.jsx";
import Loader from "../common/loader.jsx";
import {getMedias, getTexts} from "../../api/api.js";

export default function Root() {

    const { data: data, loading: loading, error: error } = useFetch(getTexts);
    const { data: medias, loading: loading2, error: error2 } = useFetch(getMedias);

    if (loading) return <><Loader></Loader></>;
    if (error) return <p>Error: {error.message}</p>;
    if (loading2) return <><Loader></Loader></>;
    if (error2) return <p>Error: {error.message}</p>;
    console.log(medias)

    return (
        <>
            <div className={`homePage alignCenter h100p " : ""}`}>
                <img className={'imageMeyDetour'} src="src/assets/images/MeyDetour.png"
                     alt="Portrait stylisé de la développeuse Mey Detour"></img>
                <div className={"intro  alignEnd"}>

                    <h1><span className="creative">Mey</span> Detour Développeuse </h1>
                    <p>{data.homePage}</p>

                    <nav className="navigation">
                        <ul>
                            <li>
                                <Link className={"flexCol alignCenter"} to="/about">
                                    <img className="mb-2" src="src/assets/images/icon/about.svg" alt="Icone À propos"/>
                                    <span>À propos</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={"flexCol alignCenter"} to="/projets">
                                    <img className="mb-2" src="src/assets/images/icon/project.svg" alt="Icone Projets"/>
                                    <span>Projets</span>
                                </Link>
                            </li>
                            <li>
                                <Link className={"flexCol alignCenter"} to="/contact">
                                    <img className="mb-2" src="src/assets/images/icon/contact.svg" alt="Icone Contact"/>
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={"socialIcon flexCol"}>
                    {medias.map(media => (
                        <><a key={media.link} target={"_blank"} href={media.link}><img src={media.image} alt={`icone de ${media.alt}`}/></a></>
                    ))}
                </div>
            </div>


        </>
    );
}
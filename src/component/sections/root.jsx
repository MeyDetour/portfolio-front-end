import React from "react";
import {Link} from "react-router-dom";
import '../../assets/css/home.css'
/*import '../../App.css'*/
import {useFetch} from "../../hooks/useApi.jsx";
import Loader from "../common/loader.jsx";
import {getTexts} from "../../api/api.js";

export default function Root() {

    const {data, loading, error} = useFetch(getTexts);

    if (loading) return <><Loader></Loader></>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className={"flexRow alignCenter h100p"}>
                <img className={'imageMeyDetour'} src="src/assets/images/MeyDetour.png"
                     alt="Portrait stylisé de la développeuse Mey Detour"></img>
                <div className={"intro  alignEnd"}>

                        <h1>Développeuse <br/> Web <span className="creative">Créative</span></h1>
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
                    <img src="src/assets/images/icon/github.svg" alt="icone GitHub"/>
                    <img src="src/assets/images/icon/linkedIn.svg" alt="icone linkedIn"/>
                </div>
            </div>


        </>
    );
}
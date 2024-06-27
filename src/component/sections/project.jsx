import React from 'react';
import {  useProject} from "../../hooks/useApi.jsx";
import '../../assets/css/projects.css'
import Loader from "../common/loader.jsx";
import {Link, useParams} from 'react-router-dom';

export default function Project() {
    const {projId} = useParams();

    const {project, loading, error} = useProject(projId)
    if (loading) return <><Loader></Loader></>;

    if (error) return <p>Error: {error.message}</p>;

    return <>
        <Link className="backButton" to="/projets">
            <img src="../src/assets/images/icon/arrow.svg" alt="icone de fleche"/> Retour
        </Link>
        <div className="flexColAround h100p">
            <div className="h50p flexRowBetween">
                <div className="flexCol">

                    <h1 className="red">{project.name}</h1>
                    <p>{project.description}</p>
                    <div className="linkProjectcontainer">
                        <a href={project.link} className="linkProject mt-2" target="_blank">
                            Voir le projet

                        </a>
                    </div>

                </div>
                <div className="flexCol">
                    <img src={project.image} alt={project.imageName}/>
                </div>
            </div>
            <div className="flexRowBetween  stepContainer">
                <div className="flexCol w25p">
                    <h2 className="red">Etape 1</h2>
                    <p>{project.step1}</p>
                </div>
                <div className="flexCol w25p">
                    <h2 className="red">Etape 2</h2>
                    <p>{project.step2}</p>
                </div>
                <div className="flexCol w25p">
                    <h2 className="red">Etape 3</h2>
                    <p>{project.step3}</p>
                </div>
            </div>
        </div>

    </>

}
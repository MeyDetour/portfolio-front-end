import React from 'react';
import {useFetch} from "../../hooks/useApi.jsx";
import '../../assets/css/projects.css'
import Loader from "../common/loader.jsx";
import {ButtonBack} from "../common/buttonBack.jsx";
import {Link} from "react-router-dom";
import {getProjects} from "../../api/api.js";

export default function Projects() {
    const {data, loading, error} = useFetch(getProjects)
    if (loading) return <><Loader></Loader></>;
    if (error) return <p>Error: {error.message}</p>;

    return <>
        <ButtonBack link="/"></ButtonBack>

        <div className="flexColAround h100p alignStart">
           <div className="projectsTexts">
               <h1 className="mt-5 red ">Projets</h1>
               <p className="w50p">Explorez mes projets pour découvrir les diverses solutions web que j'ai développées. Chaque projet
                   représente une opportunité où j'ai pu appliquer mes compétences, relever des défis techniques et
                   apprendre de nouvelles technologies. Vous y trouverez des exemples concrets de mon travail et de ma
                   passion pour le développement web.

               </p>
           </div>

            <div className="projectsContainer">
                {data.map((proj)=>(
                    <Link key={proj.id} to={`/projet/${proj.id}`}>
                       <img src={proj.image ? proj.image : 'src/assets/images/gaelleGhizoli.png'} alt={proj.imageName}/>
                    </Link>
                ))}
            </div>
        </div>
    </>

}
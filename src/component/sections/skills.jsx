import React from 'react';
import {useFetch} from "../../hooks/useApi.jsx";
import '/public/css/skills.css'
import Loader from "../common/loader.jsx";
import {ButtonBack} from "../common/buttonBack.jsx";
import {getAllTechnologies} from "../../api/api.js";
import {Navigate} from "react-router-dom";

export default function Skills() {
    const {data, loading, error} = useFetch(getAllTechnologies)
    if (loading) return <><Loader></Loader></>;

    if (error) return  <Navigate to="*" />;

    return <>
    <ButtonBack link={"/about"}></ButtonBack>
        <div className="titlecontainer">
<h1>Skills</h1>
            <p>Passionnée par le développement web, j'adore apprendre continuellement de nouvelles technologies pour enrichir mes compétences et créer des solutions innovantes.</p>
        </div>
        <div className="skillsContainer">
            {data.map((tech) => (
                <div key={tech.id} className="technology">
                    <img src={tech.image} alt={tech.imageName}/>

                    <span>{tech.name}</span>
                </div>
            ))}


        </div>

    </>
}
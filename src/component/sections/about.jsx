import React, {useEffect, useState} from 'react';
import {useFetch} from "../../hooks/useApi.jsx";
import {ButtonBack} from "../common/buttonBack.jsx";
import '../../assets/css/about.css'
import {getLastProject, getTexts} from "../../api/api.js";
import Loader from "../common/loader.jsx";
import {Link} from "react-router-dom";

export default function About() {
    const { data: lastProjectData, loading: lastProjectLoading, error: lastProjectError } = useFetch(getLastProject);
    const { data: data, loading: loading, error: error } = useFetch(getTexts);

    const [data2, setData2] = useState(lastProjectData);
    const [loading2, setLoading2] = useState(lastProjectLoading);
    const [error2, setError2] = useState(lastProjectError);

    useEffect(() => {
        setData2(lastProjectData);
        setLoading2(lastProjectLoading);
        setError2(lastProjectError);
    }, [lastProjectData, lastProjectLoading, lastProjectError]);

    if (loading) return <><Loader></Loader></>;

    if (error) return <p>Error: {error.message}</p>;
    if (loading2) return <><Loader></Loader></>;

    if (error2) return <p>Error: {error.message}</p>;

    return (
        <>
            <ButtonBack link="/"></ButtonBack>

            <div className="aboutContainer flexRow h100p  ">
                <div className="firstDescription w50p flexCol">
                    <h1>A propos</h1>
                    <p>{data.about}</p>
                    <div className="flexRow">
                     {/*   <Link to={'/certifications'} className="button">Mes certifications</Link>
                      */}  <Link to={'/compétences'} className="button">Mes Compétences</Link>
                        <Link to={'/qualites'} className="button">Mes qualités</Link>

                    </div>
                   </div>
                <div className="secondDescription w50p flexCol alignEnd">
                    <h1>Dernier project :</h1>
                    <h2> {data2.name}</h2>
                    <p>{data2.description}</p>
                    <p>Objectif(s) : {data2.objectifs} </p>
                    <span>Technologie(s) : {data2.technology} </span>

                </div>

            </div>

        </>
    );
}
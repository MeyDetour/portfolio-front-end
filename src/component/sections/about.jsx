import React, {useEffect, useState} from 'react';
import {useFetch} from "../../hooks/useApi.jsx";
import {ButtonBack} from "../common/buttonBack.jsx";
import '/public/css/about.css'
import {getLastProject, getTexts} from "../../api/api.js";
import Loader from "../common/loader.jsx";
import {Navigate} from "react-router-dom";

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

    if (error) return  <Navigate to="*" />;
    if (loading2) return <><Loader></Loader></>

    if (error2) return  <Navigate to="*" />;

    return (
        <>
            <ButtonBack link="/"></ButtonBack>

            <div className="aboutContainer    ">
                <div className="firstDescription w50p flexCol">
                    <h1>A propos</h1>
                    <p>{data.about}</p>
                    <a className={"button1"} href="/MEY_DETOUR_CV.pdf" download="MEY_DETOUR_CV.pdf">Télécharger
                        mon cv</a>

                    {/*   <div className="flexRow">
                       <Link to={'/certifications'} className="button">Mes certifications</Link>
                       <Link to={'/compétences'} className="button">Mes Compétences</Link>
                        <Link to={'/qualites'} className="button">Mes qualités</Link>

                    </div>*/}
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

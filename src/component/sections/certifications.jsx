import React from 'react';
import { useFetch} from "../../hooks/useApi.jsx";
import {ButtonBack} from "../common/buttonBack.jsx";
import '../../assets/css/certification.css'
import Loader from "../common/loader.jsx";
import {getAllCertifs} from "../../api/api.js";

export default function Certifications() {
    const {data, loading, error} = useFetch(getAllCertifs);

    if (loading) return <><Loader></Loader></>;
    if (error) return <p>Error: {error.message}</p>;

    return <>

        <ButtonBack link="/about"></ButtonBack>
        <div className="certificationContainer">
            <div className="flexRowCenter">
                <h1>Certifications</h1>
            </div>
            <div className="flexRowWrap certificationScrollable">
                {data.map(certif => (

                    <div className="certification" key={certif.id}>
                        <div className="title"><h2>{certif.name}</h2></div>
                        <div className="description"><p>{certif.description}</p></div>
                        <div className="points">
                            <ul>
                                <li>

                                    <p>{certif.point1}</p>
                                </li>
                                <li>

                                    <p>{certif.point2}</p>
                                </li>
                                <li>

                                    <p>{certif.point3}</p>
                                </li>
                            </ul>
                        </div>
                    </div>


                ))}

            </div>
        </div>


    </>

}
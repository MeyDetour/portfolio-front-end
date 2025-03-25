import React from 'react';
import {useFetch} from "../../hooks/useApi.jsx";
import '/public/css/contact.css'
import Loader from "../common/loader.jsx";
import { Navigate} from 'react-router-dom';
import {getMedias} from "../../api/api.js";
import {ButtonBack} from "../common/buttonBack.jsx";

export default function Contact() {

    const {data, loading, error} = useFetch(getMedias)
    if (loading) return <><Loader></Loader></>;

    if (error) return  <Navigate to="*" />;
    return <>
        <div className="contactcontainer h100p">
            <ButtonBack link={"/"} ></ButtonBack>

            <div className="bandeau">
                  </div>
            <div className="contactContent h100p">
                <div className=" contactContentScocialIcon">
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
                <div className="contactContentTexts  ">

                    <h1 className="red">Me contacter</h1>
                    <p>Mail : contact@meydetour.com</p>
                    <p>
                        Je suis toujours ravi de rencontrer de nouvelles personnes et d'explorer de potentielles
                        opportunités. Que vous ayez des questions sur mes projets, que vous souhaitiez discuter
                        d'idées de collaboration ou simplement entrer en contact, je serais heureux de vous
                        entendre. </p>
                    <p>N'hésitez pas à me contacter via le formulaire ci-dessous ou par mes coordonnées fournies. Je
                        m'efforcerai de répondre à votre message dans les plus brefs délais.</p>
                    <a className={"button1"} href="/MEY_DETOUR_CV.pdf" download="MEY_DETOUR_CV.pdf">Télécharger mon cv</a>
                    {/*
                        <Link className="button mt-3" to="/deroulement">Me contacter pour un projet</Link>*/}

                </div>
            </div>


        </div>

    </>
}

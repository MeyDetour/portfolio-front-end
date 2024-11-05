import React, {useEffect, useRef, useState} from 'react';
import '../../assets/css/quality.css'
import {ButtonBack} from "../common/buttonBack.jsx";
import {useFetch} from "../../hooks/useApi.jsx";
import {getQualities} from "../../api/api.js";
import Loader from "../common/loader.jsx";
import {Navigate} from "react-router-dom";

export default function Quality() {
    const {data,loading,error} = useFetch(getQualities)
    const elementsRef = useRef([]);
    const [clickedElements, setClickedElements] = useState(new Set());


    // LOAD ERROR AND LOADING FOR THE FETCH
    if (loading) return <><Loader></Loader></>;
    if (error) return  <Navigate to="*" />;

    // WHEN A QUALITY ELEMENT IS CLICKED
    const handleClick = (index) => {
        console.log("clicked on",index)
        setClickedElements((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);

            }
            return newSet;
        });
    };

    return <>
        <ButtonBack link="/about"></ButtonBack>
        <div className="flexRowCenter my-5">
            <h1>Mes qualitées</h1>
        </div>
        <div className="flexRow flexRowWrap poulpeContainer">
            {data.map((quality,index)=>(
                <div
                    key={quality.id}
                    ref={el => (elementsRef.current[index] = el)}
                    className={`moving-element ${clickedElements.has(index) ? 'clicked' : ''} my-3 ` }
                    onClick={() => {
                        handleClick(index);
                    }}
                >
                    <img
                        src={clickedElements.has(index) ? "src/assets/images/icon/sun.svg" : "src/assets/images/icon/poulpe.svg"}
                        className="mb-1"
                        alt="icone de poulpe"
                    />
                    <span className={clickedElements.has(index) ? 'color-white ' : ' '}>{quality.name}</span>
                    <p className={clickedElements.has(index) ? 'd-flex movingElementText' : 'd-none '}>{quality.description}</p>
                </div>

            ))}
        </div>

    </>

}
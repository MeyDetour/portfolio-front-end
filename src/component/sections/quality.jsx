import React, {useEffect, useRef, useState} from 'react';
import '../../assets/css/quality.css'
import {ButtonBack} from "../common/buttonBack.jsx";
import {useFetch} from "../../hooks/useApi.jsx";
import {getQualities} from "../../api/api.js";
import Loader from "../common/loader.jsx";

export default function Quality() {
    const {data,loading,error} = useFetch(getQualities)
    const elementsRef = useRef([]);
    const initialPositions = useRef([]);
    const [clickedElements, setClickedElements] = useState(new Set());


    // CHANGE ELEMENTS POSITION
    useEffect(() => {
        const setInitialPositions = () => {
            elementsRef.current.forEach((element, index) => {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    initialPositions.current[index] = { x: rect.left, y: rect.top };
                }
            });
        };

        const moveElementRandomly = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            elementsRef.current.forEach((element, index) => {
                if (element && !clickedElements.has(index)) {
                    const initialPosition = initialPositions.current[index];
                    let x, y;

                    do {
                        x = initialPosition.x + (Math.random() * 400 - 200);
                        y = initialPosition.y + (Math.random() * 400 - 200);
                    } while (x < 200 || x > windowWidth - element.offsetWidth -200 || y < 200 || y > windowHeight - element.offsetHeight -400);

                    element.style.transform = `translate(${x - initialPosition.x}px, ${y - initialPosition.y}px)`;
                }
            });
        };

        // Set initial positions once after the first render
        setInitialPositions();

        const interval = setInterval(moveElementRandomly, 1000); // Change position every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [data,clickedElements]); // Re-run effect if data changes


    // LOAD ERROR AND LOADING FOR THE FETCH
    if (loading) return <><Loader></Loader></>;
    if (error) return <p>Error: {error.message}</p>;

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
        {data.map((quality,index)=>(
            <div
                key={quality.id}
                ref={el => (elementsRef.current[index] = el)}
                className={`moving-element ${clickedElements.has(index) ? 'clicked' : ''}`}
                onClick={() => {
                    handleClick(index);
                }}
            >
                <img
                    src={clickedElements.has(index) ? "src/assets/images/icon/sun.svg" : "src/assets/images/icon/poulpe.svg"}
                    className="mb-1"
                    alt="icone de poulpe"
                />
                <span>{quality.name}</span>
                <p className={clickedElements.has(index) ? 'd-flex movingElementText' : 'd-none '}>{quality.description}</p>
            </div>

        ))}
    </>

}
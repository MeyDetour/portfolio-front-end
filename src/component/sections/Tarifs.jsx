import React from 'react';
import '../../assets/css/contact.css'
import '../../assets/css/deroulement.css'
import {ButtonBack} from "../common/buttonBack.jsx";
import '../../assets/css/tarif.css'
import {ButtonNext} from "../common/buttonNext.jsx";

export default function Tarifs() {
    return <>
        <ButtonBack link="/deroulement"></ButtonBack>

        <ButtonNext link="/contact" text="Page contact"></ButtonNext>
        <div className="flexColEvenly alignCenter tarifContainer h100p">
            <div className="flexRow alignCenter">
                <h1 className="red">Pourquoi me contacter</h1>
            </div>
            <div className="flexRowCenter h50p">
                <div className="flexCol w25p alignCenter mr-3">
                    <h2>Situation 1</h2>
                    <p>Vous diposez déjà d’une maquette en rapport avec votre projet et souhaitez la faire développer
                        !</p>
                </div>
                <div className="verticalLine">

                </div>
                <div className="flexCol w25p alignCenter ml-3">
                    <h2>Situation 2</h2>
                    <p>Vous n’avez toujours pas de maquette de votre site internet et souhaitez en avoir une en plus de
                        la faire développer !</p>
                </div>
            </div>
        </div>
    </>
}
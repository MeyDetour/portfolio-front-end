import React from 'react';
import '/assets/css/deroulement.css'
import {ButtonBack} from "../common/buttonBack.jsx";
import {ButtonNext} from "../common/buttonNext.jsx";

export default function Deroulement() {
    return <>
        <ButtonBack link="/contact"></ButtonBack>

        <ButtonNext link="/tarifs" text="Etape suivante"></ButtonNext>
        <div className="deroulementContainer h100p">
            <h1>Déroulement d'un projet</h1>
            <div className="projectStepContainer   ">
                <div className="projectStep">
                    <h2 className="red">1 - Etude du dossier</h2>
                    <p>Nous commençons par définir clairement les objectifs du projet avec le client. Cette discussion
                        initiale permet de comprendre les besoins, les attentes et les contraintes, garantissant ainsi
                        une vision commune et des objectifs bien alignés.</p>
                </div>
                <div className="projectStep">
                    <h2 className="red">3 - Prototype et Validation de la Maquette
                    </h2>
                    <p>(Représentation graphique exacte du site internet) Nous créons une maquette visuelle de l'application ou du site web, puis nous la soumettons au client pour validation. Cette étape permet d'ajuster le design et l'ergonomie selon les retours avant de passer au développement.</p>
                </div>
                <div className="projectStep">
                    <h2 className="red">2 - Cahier des Charges
                    </h2>
                    <p>Ensuite, nous rédigeons un cahier des charges détaillé. Ce document précise les fonctionnalités, les spécifications techniques, les délais et les ressources nécessaires, assurant une base solide pour le projet.</p>
                </div>

                <div className="projectStep">
                    <h2 className="red">4 - Développement de l'Application et Mise en Ligne</h2>
                    <p>Enfin, nous développons l'application conformément à la maquette validée. Une fois le développement terminé, nous procédons à la mise en ligne, assurant ainsi une transition fluide et un lancement réussi.</p>
                </div>
            </div>
        </div>
    </>
}
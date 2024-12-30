import React from 'react';
import {ButtonBack} from "../common/buttonBack.jsx";

import '/public/css/mentionsLegales.css'

export default function Mentiosnlegales() {


    return (
        <>
            <ButtonBack link="/"></ButtonBack>

            <div className="mentionsLegales    ">
                <h1>Mentions legales</h1>
                <h2>Editeur du site</h2>
                <span><b>Nom du responsable :</b>Mey Detour</span>
                <span> <b>Adresse :</b> 14 allée des sources Simandres 69360</span>
                <span><b>Email :</b>contact@meydetour.com</span>
                <span><b>Téléphone :</b>07 82 40 80 49</span>
                <span><b>Numéro SIRET :</b>93381179600012</span>
                <span><b>Directeur de publication :</b>Mey Detour</span>


                <h2>Hébergement</h2>
                <span><b>Hébergeur :</b>Linode, LLC</span>
                <span><b>Adresse du siège social :</b>249 Arch Street, Philadelphia, PA 19106, USA</span>
                <span><b>Code postal :</b> 19106</span>
                <span><b>Site web :</b>https://www.linode.com</span>


                <h2>Protection des données personnelles</h2>
                <p>Ce site n’effectue pas de collecte directe de données personnelles via des formulaires ou autres
                    outils similaires. Cependant, certaines informations peuvent être collectées à des fins statistiques
                    via Google Analytics.</p>
                <p><b>Google Analytics :</b>Ce service d’analyse mesure l’audience du site et peut collecter des données
                    anonymes sur la navigation des utilisateurs. Les adresses IP sont anonymisées et les données sont
                    conformément traitées selon les règles du RGPD.</p>
                <p>Les utilisateurs peuvent refuser ces cookies via le bandeau d’acceptation des cookies ou en modifiant
                    les paramètres de leur navigateur.
                    Pour plus d’informations sur Google Analytics, consultez leur politique de confidentialité :
                    https://policies.google.com/privacy.
                </p>


                <h2>Coockies</h2>
                <p>Le site utilise les cookies suivants :</p>
                <ul>
                    <li> Cookies analytiques : Utilisés par Google Analytics pour analyser la fréquentation du site.
                    </li>
                </ul>


                <h2>Responsabilités</h2>
                <p>  L’éditeur du site met tout en œuvre pour assurer l’exactitude des informations présentées.
                    Cependant, il ne peut être tenu responsable d’éventuelles erreurs ou omissions.
                    Les liens externes présents sur ce site ne relèvent pas de la responsabilité de l’éditeur.
                </p>


                <h2>Propriété intellectuelle</h2>
                <p>Tous les contenus présents sur ce site (textes, images, illustrations, photographies, vidéos, etc.)
                    sont protégés par le droit d’auteur.
                </p>
                <ul>
                    <li>
                        <p> Images, illustrations, photographies : Les images et illustrations provenant de ChatGPT ou
                            prises par l’éditeur (captures d’écran) sont sous la propriété exclusive de l’éditeur. Toute
                            reproduction ou utilisation requiert une autorisation préalable.
                        </p>
                    </li>
                    <li>
                        <p>Textes externes : Toute reproduction ou utilisation des textes tiers requiert l’autorisation
                            de leur auteur ou au minimum une citation claire de la source.
                        </p>
                    </li>
                </ul>
                <p>

                    Toute reproduction, même partielle, est interdite sans l’autorisation expresse de l’éditeur.
                </p>


                <h2>Contact</h2>
                <p>Pour toute question ou demande, vous pouvez contacter l’éditeur à l’adresse suivante :
                    contact@meydetour.com .</p>

            </div>


        </>
    );
}
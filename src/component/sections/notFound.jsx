import React from 'react';
import '/assets/css/notfound.css'
import {Link} from "react-router-dom";
export default function  NotFound (){

    return (
        <div className="notFoundContainer">
            <h1>Tu t'es perdu ? </h1>
            <p>
                La ressource demandée n'existe pas !
            </p>
            <div className="cssError404">
                <span>4</span>
                <div className={"zero"}>
                    <div className="head">
                        <div className="crete"></div>
                        <div className="eye1"><div className="pupill"></div></div>
                        <div className="eye2"><div className="pupill"></div></div>
                        <div className="ear1"></div>
                        <div className="ear2"></div>
                        <div className="mouth">
                            <div className="tong"></div>
                        </div>
                    </div>
                </div>
                <span>4</span>
            </div>
            <Link href="/">Retour au site</Link>
        </div>
    )
}



//gobuster -u http://fakebank.thm -w wordlist.txt dir
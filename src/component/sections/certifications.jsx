import React from 'react';
import '../../assets/css/certification.css'

export default function Certifications() {
    return <>

        <div className="certificationContainer">

            <a href="/">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M16.9396 4.93967C17.2209 4.65846 17.6024 4.50049 18.0001 4.50049C18.3979 4.50049 18.7793 4.65846 19.0606 4.93967L28.0606 13.9397L31.0606 16.9397C31.3339 17.2226 31.4851 17.6015 31.4816 17.9948C31.4782 18.3881 31.3205 18.7643 31.0423 19.0424C30.7642 19.3205 30.388 19.4783 29.9947 19.4817C29.6014 19.4851 29.2225 19.3339 28.9396 19.0607L28.5001 18.6212V28.5002C28.5001 29.2958 28.1841 30.0589 27.6214 30.6215C27.0588 31.1841 26.2958 31.5002 25.5001 31.5002H21.0001C20.6023 31.5002 20.2208 31.3421 19.9395 31.0608C19.6582 30.7795 19.5001 30.398 19.5001 30.0002V25.5002H16.5001V30.0002C16.5001 30.398 16.3421 30.7795 16.0608 31.0608C15.7795 31.3421 15.3979 31.5002 15.0001 31.5002H10.5001C9.70447 31.5002 8.94141 31.1841 8.3788 30.6215C7.81619 30.0589 7.50012 29.2958 7.50012 28.5002V18.6212L7.06062 19.0607C6.77772 19.3339 6.39882 19.4851 6.00552 19.4817C5.61223 19.4783 5.23601 19.3205 4.95789 19.0424C4.67978 18.7643 4.52203 18.3881 4.51861 17.9948C4.51519 17.6015 4.66639 17.2226 4.93962 16.9397L7.93962 13.9397L16.9396 4.93967Z"
                          fill="#FF2147"/>
                </svg>

            </a>
            <div className="flexRowCenter">
                <h1>Certifications</h1>
            </div>
            <div className=" certifications">
                <a className={""} href="src/assets/Fundamentals of digital marketing _ Google.pdf"
                   download="Fundamentals of digital marketing _ Google.pdf">Télécharger la certification : "Les principes fondamentaux
                    du marketing digital" de Google</a>
                <a className={""} href="src/assets/rgpd_secnum.pdf" download="rgpd_secnum.pdf">Télécharger la certification :
                    Formation sur la RGPD de SecNumAcadémie</a>
            </div>
        </div>


    </>

}
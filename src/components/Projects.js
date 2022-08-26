import Application from './Application';
import '../styles/Projects.css'
import sadlibz from '../images/sadlibz.png';
import wookiesGold from '../images/wookies-gold.jpg';
import comingSoon from '../images/coming-soon.jpg';
import React from 'react';

export default function Projects() {
    return (
        <React.Fragment>
            <link href="../styles/Projects.css" rel="stylesheet"/>
            <div className="container my-3">
                <div className="row">
                    <Application
                    image={sadlibz}
                    alt="Sadlibz home page"
                    github="https://github.com/mike-gonz0/sadLibs"
                    deployed="https://mike-gonz0.github.io/sadLibs/"
                    name="Sadlibz"
                    caption="Front-End App"
                    />
                    <Application
                    image={wookiesGold}
                    alt="Wookie's Gold home page"
                    github="https://github.com/pcondori1996/WookiesGold"
                    deployed="https://glacial-tor-15581.herokuapp.com/"
                    name="Wookie's Gold"
                    caption="Full-Stack App"
                    />
                </div>
                <div className="row">
                    <Application
                    image={comingSoon}
                    alt="Mern Application"
                    github="TBD"
                    deployed="TBD"
                    name="TBD"
                    caption="MERN App"
                    />
                    <Application
                    image={comingSoon}
                    alt="Mern Application"
                    github="TBD"
                    deployed="TBD"
                    name="TBD"
                    caption="Application"
                    />
                </div>
                <div className="row">
                    <Application
                    image={comingSoon}
                    alt="Mern Application"
                    github="TBD"
                    deployed="TBD"
                    name="TBD"
                    caption="Application"
                    />
                    <Application
                    image={comingSoon}
                    alt="Mern Application"
                    github="TBD"
                    deployed="TBD"
                    name="TBD"
                    caption="Application"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

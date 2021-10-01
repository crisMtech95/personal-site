import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './About.css'

export default function About() {

    return(
        <div className="About__mainContainer" id="about">
            <div className="About__container">
                <h2>About</h2>
                <div className="About__content">
                    <div className="About__imageDiv">
                        <div className="About__image" />
                    </div>
                    <div className="About__contentDiv">
                        <p>I'm originally from Colombia, but I am currently based in New York City. My love for problem solving and learning new technologies have driven to learn full stack software developement. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './Projects.css'

export default function Projects() {

    return(
        <div className="Projects__mainContainer"  id="projects">
            <div className="Projects__bigContainer">
                {/* <div> */}
                    <div className="Projects__h2Div">
                        <h2>Projects</h2>
                    </div>
                    <div className="Projects__h2Div2">
                        <h2>Four full stack projects, Done from scratch without guides.</h2>
                    </div>
                {/* </div> */}
                <div className="Projects__container">
                    <div className="Projects__SingleProjectDiv">
                        <h3>All-bnb</h3>
                        <div className="Projects__SingleProjectMain">
                            <a className="Projects__SingleProjectsLinks" href="https://all-bnb.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv allbnbImg"></div>
                            </a>
                            <div className="Projects__contentMain">
                                <p> As you might deduce from the name, Allbnb is a full stack clone of Airbnb with the very important difference that users are able to lease or lend any type of item that you might need for a trip. Need a place to stay?, a car? or camping gear for your trip?, Allbnb is the place where you can find all those items for a specific location.</p>
                                <p>-Technologies used: JavaScript, Html, Css, React, Redux, Python, Flask, SQLAlchemy, Postgresql. </p>
                            </div>
                        </div>
                    </div>
                    <div className="Projects__SingleProjectDiv">
                        <h3>Audify</h3>
                        <div className="Projects__SingleProjectMain">

                            <div className="Projects__contentMain">
                                <p> As you might deduce from the name, Allbnb is a full stack clone of Airbnb with the very important difference that users are able to lease or lend any type of item that you might need for a trip. Need a place to stay?, a car? or camping gear for your trip?, Allbnb is the place where you can find all those items for a specific location.</p>
                                <p>-Technologies used: JavaScript, Html, Css, React, Redux, Python, Flask, SQLAlchemy, Postgresql. </p>
                            </div>
                            <a className="Projects__SingleProjectsLinks" href="https://audify-app.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv audifyImg"></div>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__SingleProjectDiv">
                        <h3>Sportsgram</h3>
                        <div className="Projects__SingleProjectMain">
                            <a className="Projects__SingleProjectsLinks" href="https://flickstagram.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv sportsgramImg"></div>
                            </a>
                            <div className="Projects__contentMain">
                                <p> As you might deduce from the name, Allbnb is a full stack clone of Airbnb with the very important difference that users are able to lease or lend any type of item that you might need for a trip. Need a place to stay?, a car? or camping gear for your trip?, Allbnb is the place where you can find all those items for a specific location.</p>
                                <p>-Technologies used: JavaScript, Html, Css, React, Redux, Python, Flask, SQLAlchemy, Postgresql. </p>
                            </div>
                        </div>
                    </div>
                    <div className="Projects__SingleProjectDiv">
                        <h3>Stack-OilFlow</h3>
                        <div className="Projects__SingleProjectMain">
                            <div className="Projects__contentMain">
                                <p> As you might deduce from the name, Allbnb is a full stack clone of Airbnb with the very important difference that users are able to lease or lend any type of item that you might need for a trip. Need a place to stay?, a car? or camping gear for your trip?, Allbnb is the place where you can find all those items for a specific location.</p>
                                <p>-Technologies used: JavaScript, Html, Css, React, Redux, Python, Flask, SQLAlchemy, Postgresql. </p>
                            </div>
                            <a className="Projects__SingleProjectsLinks" href="http://stack-oil-flow.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv stack-oilFlowImg"></div>
                            </a>
                        </div>
                    </div>
                <div/>
                </div>
            </div>
        </div>
    )
}

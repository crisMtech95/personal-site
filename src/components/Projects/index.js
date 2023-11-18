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
                    <div className="Projects__SingleProjectDiv"
                         data-aos="fade-left">
                        <h3>All-bnb</h3>
                        <div className="Projects__SingleProjectMain">
                            <a className="Projects__SingleProjectsLinks" href="https://all-bnb.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv allbnbImg"></div>
                            </a>
                            <div className="Projects__contentMain">
                                <p> As you might deduce from the name, Allbnb is a full stack clone of Airbnb with the very important difference that users are able to lease or lend any type of item that you might need for a trip. Need a place to stay?, a car? or camping gear for your trip?, Allbnb is the place where you can find all those items for a specific location.</p>
                                <p><strong>-Technologies used:</strong> JavaScript, Html, CSS, React, Redux, Python, Flask, SQLAlchemy, Postgresql. </p>
                            </div>
                        </div>
                    </div>
                    <div className="Projects__SingleProjectDiv"
                         data-aos="fade-right">
                        <h3>Audify</h3>
                        <div className="Projects__SingleProjectMain">

                            <div className="Projects__contentMain">
                                <p> Audify is an application that utilizes the Spotify-API to stream music and uses full-stack technology to allow for playlist creations where a user can store songs they like. Inspired by Spotify, the application uses React and Redux to provide the single-page-application experience and Flask in the backend to interact with the PostgreSQL Database.</p>
                                <p><strong>-Technologies used:</strong> JavaScript, Html, CSS, React, Redux, Python, Flask, SQLAlchemy, Postgresql. </p>
                            </div>
                            <a className="Projects__SingleProjectsLinks" href="https://audify-app.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv audifyImg"></div>
                            </a>
                        </div>
                    </div>
                    <div className="Projects__SingleProjectDiv"
                         data-aos="fade-left">
                        <h3>Sportsgram</h3>
                        <div className="Projects__SingleProjectMain">
                            <a className="Projects__SingleProjectsLinks" href="https://flickstagram.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv sportsgramImg"></div>
                            </a>
                            <div className="Projects__contentMain">
                                <p>Sportsgram is a full Stack clone of Flicker, with a feed inspired by instagram where user can find, comment and share their favorite sports related stories.</p>
                                <p><strong>-Technologies used:</strong> Express, Sequelize, React, Redux, Javascript, Html, CSS, Postgresql</p>
                            </div>
                        </div>
                    </div>
                    /*
                    <div className="Projects__SingleProjectDiv"
                         data-aos="fade-right">
                        <h3>Stack-OilFlow</h3>
                        <div className="Projects__SingleProjectMain">
                            <div className="Projects__contentMain">
                                <p>Stack Oil flow is a social based platform that allows users to utilize question and answer based features to both share and gain Automotive based knowledge. The main goal of Stack Oil Flow is to cultivate an environment of automotive enthusiasts, both recreational and professional to come together over a shared passion.</p>
                                <p><strong>-Technologies used:</strong> JavaScript, Html, CSS, Pug, Express, Sequelize.</p>
                            </div>
                            <a className="Projects__SingleProjectsLinks" href="http://stack-oil-flow.herokuapp.com/" target="_blank">
                                <div className="Projects__imageDiv stack-oilFlowImg"></div>
                            </a>
                        </div>
                    </div>
                    */
                <div/>
                </div>
            </div>
        </div>
    )
}

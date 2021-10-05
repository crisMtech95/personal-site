import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './Background.css'

export default function Background() {
    let [name, setName] = useState("")
    let [description, setDescription] = useState("My name is Cristhian Morales, I'm a Software Engineer")

    useEffect(() => {
        if (name.length < 54 && name.length !== 0) {
            setTimeout(() => {
                setName(name + description[0])
                if (description.length >= 2)
                setDescription(description[1] + description.slice(2))
            }, 110)
        } else if (!name) {
            setTimeout(() => {
                setName(description[0])
                if (description) {
                    setDescription(description[1] + description.slice(2))
                }
            }, 110)
        }
    }, [description])

    return(
            <div className="Background__mainContainer" id="home">
                <div className="Background__bgImageDiv">
                <div className="Background__bgImage"></div>
                        <div className="Background__textDiv">
                            <div className="Background__text">
                                <p className="Background__textTitle">
                                    <p className="Background__textTitleH">H</p>
                                    <p className="Background__textTitleE">e</p>
                                    <p className="Background__textTitleL">l</p>
                                    <p className="Background__textTitleL2">l</p>
                                    <p className="Background__textTitleO">o</p>
                                    <p className="Background__textTitleEnd">!</p></p>
                                <div>{name}</div>
                            </div>
                        </div>
                </div>
            </div>

    )
}

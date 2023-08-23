import React from "react"
import logo from  "./images/troll-face.png"

export default function Header()
{
    return(
        <header className="header">
            <img className="header--image" src={logo}/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project </h4>
        </header>
    )
}
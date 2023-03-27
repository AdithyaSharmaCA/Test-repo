import React from "react"
import "./Card"
import './Card.css'
export default function Taskbar(){
    return(
    <div>
        <div className="navbar">
            <nav>
                <ul className="nav_links">
                <li id="link"><a href="#create">Create</a></li>
                <li id="link"><a href="#edit">Edit</a></li>
                <li id="link"><a href="#remove">Remove</a></li>
                <li id="link"><a href="#Move">Move</a></li>
                <li id="link"><a href="#extra2">More</a></li>
                </ul>
            </nav>
        </div>
    </div>)
}
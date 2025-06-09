import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar">
            <NavLink to="/react-personal-site" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About Me</NavLink>
            <NavLink to="/react-personal-site/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
            <NavLink to="/react-personal-site/experience" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Experience</NavLink>
            <NavLink to="/react-personal-site/education" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Education</NavLink>
        </nav>
    )
}

export default Navbar;
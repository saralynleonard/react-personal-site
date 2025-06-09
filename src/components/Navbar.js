import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About Me</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
            <NavLink to="/experience" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Experience</NavLink>
            <NavLink to="/education" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Education</NavLink>
        </nav>
    )
}

export default Navbar;
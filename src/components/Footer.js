import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
        <p className="footer-icons">
            <a class="footer-icon" href="https://www.linkedin.com/in/saralyn-leonard-437689a4/"><i class="fa-brands fa-linkedin" title="Linkedin"></i></a>
            <a class="footer-icon" href="https://github.com/saralynleonard" title="GitHub"><i class="fa-brands fa-github"></i></a>
        </p>
            <p>
                Built by Saralyn Leonard with React 
                &copy; <span className="year">{year}</span>
            </p>            
        </div>
    )
}

export default Footer;
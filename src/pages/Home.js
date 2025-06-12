import React from "react";
import skills from "../data/skills.json"

function Home() {
    return (
        <main>
            <section className="abt-container">
                <p>
                    Hi, I'm Saralyn, a graduate student pursuing my master's in Computer Information Systems. I love learning new technologies and building creative web projects.
                </p>
                    <div className="background-container">
                        <p className="background-title">Projects & Experience</p>
                        <p>
                            Throughout my coursework, I have developed and deployed several web applications. These projects demonstrate my ability to design, develop, and maintain full-stack solutions. You can view some of my projects <a href="http://localhost:3000/projects">here.</a>
                        </p>
                    </div>
                    <div>
                        <p className="skills-title">Skills</p>
                        <ul className="skills abt-skills">
                        {skills.map(skill => (
                            <li>
                                <i class={skill.icon}></i>{skill.skill}
                            </li>
                        ))}
                        </ul>
                    </div>
            </section>
        </main>
    )
}

export default Home;
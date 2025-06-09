import React from "react";
import projects from '../data/projects.json'

function ProjectList() {
    return (
        <main>
            <section className="projects">
                {/* <h2 className="section-title">Projects</h2> */}
                <ul>
                    <div className="card">
                        {projects.map(project => (
                            <li key={project.id} className="project">
                                <p className="exp-title">{project.name}</p>
                                <p className="date"><i class="fa-sharp fa-light fa-calendar-days"></i>{project.dateCompleted}</p>
                                <p>{project.description}</p>
                                <ul className="skills">
                                    {project.skills.map(skill => (
                                        <li key={skill}>
                                            <i class="fa-sharp fa-light fa-tag"></i>{skill}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="links">
                                    {project.links.map(
                                        link => (
                                            <li className="url">
                                                <a href={link.url} target="_blank"><i class="fa-sharp fa-light fa-link"></i>{link.title}</a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </li>
                        ))}
                    </div>
                </ul>
            </section>
        </main>
    )
}

export default ProjectList;
import React from "react";
import education from '../data/education.json'

function EducationList() {

    function formatDate(date) {
        if (!date) return '';
        const formattedDate = new Date(date);
        return formattedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})
    }

    return (
        <main>
            <section className="education">
                {/* <h2 className="section-title">Education</h2> */}
                <ul>
                    <div className="card">
                        {education.map(school => (
                            <li key={school.id} className="school">
                                <p className="edu-title">{school.degree} | {school.university}</p>
                                <p><i class="fa-sharp fa-light fa-calendar-days"></i>{formatDate(school.startDate)} - {formatDate(school.endDate)}</p>
                                <p><i class="fa-sharp fa-light fa-location-dot"></i>{school.location}</p>
                                <p>Specialization in {school.concentration}</p>
                                <ul className="skills">
                                    {school.skills.map(skill => (
                                        <li key={skill}>
                                            <i class="fa-sharp fa-light fa-tag"></i>{skill}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="links">
                                    {school.links.map(link => (
                                        <li className="url">
                                            <a href={link.url} target="_blank"><i class="fa-sharp fa-light fa-link"></i>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </div>
                </ul>
            </section>
        </main>
    )
}

export default EducationList; 
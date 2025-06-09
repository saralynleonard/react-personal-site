import React from "react";
import experience from '../data/experience.json'

function ExperienceList() {

    function formatDate(startDate, endDate, currentPosition) {
        function format(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
        }

        const formattedStart = format(startDate);
        const formattedEnd = currentPosition ? 'Present' : format(endDate)
        
        return `${formattedStart} - ${formattedEnd}`
    }

    return (
        <main>
            <section className="experience">
                {/* <h2 className="section-title">Education</h2> */}
                <ul>
                    <div className="card">
                        {experience.map(job => (
                            <li key={job.id} className="job">
                                <p className="exp-title">{job.jobTitle} | {job.company}</p>
                                <p><i class="fa-sharp fa-light fa-calendar-days"></i>{formatDate(job.startDate, job.endDate, job.currentPosition)}</p>
                                <p><i class="fa-sharp fa-light fa-location-dot"></i>{job.location}</p>
                                <p>{job.description}</p>
                                <ul className="skills">
                                    {job.skills.map(skill => (
                                        <li key={skill}>
                                            <i class="fa-sharp fa-light fa-tag"></i>{skill}
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

export default ExperienceList;
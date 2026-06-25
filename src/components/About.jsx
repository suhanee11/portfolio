function About({bio, education}){
    return(
        <div className="about-section">
            <h2>About</h2>
            <p className="about-bio">{bio}</p>

            <div className="Education-card">
                <h3>{education.school}</h3>
                <p className="education-degree">{education.degree}</p>
                <p className="education-meta">{education.duration}</p>
                <p className="education-coursework">{education.coursework.join(", ")}</p>
            </div>
        </div>
    )
}

export default About
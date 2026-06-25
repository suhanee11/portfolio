import './project.css'


function Projects({ ProjectsList }) {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      {ProjectsList.map((project) => (
        <div key={project.title} className="project-card">
          <h3> {project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View project →
          </a>
        </div>
      ))}
    </div>
  )
}


export default Projects
import './project.css'

function Projects({ ProjectsList }) {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      {ProjectsList.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
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
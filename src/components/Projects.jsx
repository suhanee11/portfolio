const banners = [
  "linear-gradient(135deg, #e8527a, #c9a6b5, #f4a8c0)",
  "linear-gradient(135deg, #b5475a, #e8527a, #ffb3c6)",
  "linear-gradient(135deg, #c9a6b5, #b5475a, #e8527a)",
]

import './project.css'
function Projects({ ProjectsList }) {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      {ProjectsList.map((project, index) => (
        <div key={project.title} className="project-card">
          <div className="project-banner" style={{ background: banners[index % banners.length] }} />
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              View project →
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
function Skills({ skillCategories }){
    return(
        <div className="skills-section">
            <h2>Skills</h2>
            {skillCategories.map((category)=>(
                <div key={category.name} className="skill-category">
                <h3>{category.name}</h3>
                <div className="skill-items">
                    {category.items.map((item)=>
                    (
                        <span key={item} className="skill-chip">{item}</span>
                    ))}
                </div>
                </div>
            ))}
        </div>
    )
}

export default Skills
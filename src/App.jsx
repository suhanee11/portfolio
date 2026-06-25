import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'

function App(){
  return(

    <div className="page-container">
      <Navbar />
      <Hero 
      name="Suhanee Gupta" 
      tagline="Backend Engineer | Full-Stack Developer | Open Source Builder" 
      />
      <div id="about">
      <About
        bio="Backend-focused CS undergraduate building full-stack systems with Spring Boot, React, and Go. Built and deployed an AI-powered mock interview platform with ATS resume scoring and Gemini API integration. Seeking a technical internship to apply backend and system-design skills in a product environment."
        education={{
          school:"Vellore Institute of Technology, Vellore",
          degree:"Btech in Computer Science & Engineering",
          duration:"Aug 2023-Jul 2027",
          cgpa:"8.37",
          coursework:["OOP","Data Structures & Algorithms", "Operating Systems", "Computer Networking", "DBMS"]
        }}
        />
        </div>

      <div id="skills">
      <Skills 
      skillCategories={[
        {name:"Languages",items: ["Java", "Python", "C++", "Go", "JavaScript", "SQL", "C", "HTML", "CSS"]},
        {name: "Frameworks & Databases", items: ["Spring Boot", "React", "MySQL"]},
        { name: "Tools", items: ["Git", "GitHub", "Postman", "JUnit", "IntelliJ IDEA", "VSCode"] },
        { name: "Cloud", items: ["AWS EC2", "S3", "IAM"] }
      ]} 
        />
        </div>

        <div id="projects">
        <Projects
        ProjectsList={[
          {
            title:"AI Mock Interview Platform",
            description:"Full-stack AI interview tool with PDF resume upload, ATS scoring, and Gemini-powered question generation with speech-to-text and ML-driven feedback.",
            link:"https://github.com/suhanee11/ai-mock-interview",
            tags: ["React", "Spring Boot", "MySQL", "Gemini API", "AWS"]
          },
          {
            title:"Subscription Manager",
            description:"Full-stack subscription management system with JWT auth, refresh-token rotation, and renewal reminders.",
            link:"https://github.com/suhanee11/subscription-manager",
            tags: ["React", "Spring Boot", "MySQL", "JWT"]

          },
          {
            title:"Hot Reload CLI Tool",
            description:"Go CLI tool using fsnotify that watches the filesystem and auto-rebuilds/restarts apps on save.",
            link:"https://github.com/suhanee11/hotreload",
            tags: ["Go", "CLI", "fsnotify"]

          }
        ]}
        />
        </div>

        <Contact
        email="suhanee03work@gmail.com"
        github="https://github.com/suhanee11"
        linkedin="https://linkedin.com/in/suhaneegupta"
        />
    </div>
  )
}

export default App

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Navbar.css'

function Navbar(){
    function scrollToSection(id){
        document.getElementById(id).scrollIntoView({behavior:"smooth"})
    }
    return(
        <nav className="navbar">
            <span className="navbar-logo">SG</span>
            <div className="navbar-links">
                <button onClick={()=> scrollToSection("about")}>About</button>
                <button onClick={()=> scrollToSection("skills")}>Skills</button>
                <button onClick={()=> scrollToSection("projects")}>Projects</button>
            </div>
            <div className="navbar-right">
                <a href="https://github.com/suhanee11" target="_blank" rel="noreferrer" className="navbar-icon">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/suhaneegupta" target="_blank" rel="noreferrer" className="navbar-icon">
                    <FaLinkedin />
                </a>
                <button onClick={()=> scrollToSection("contact")} className="navbar-contact-btn">
                    Contact
                </button>
            </div>
        </nav>
    )
}

export default Navbar
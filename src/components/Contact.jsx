import {useState} from 'react'

function Contact({ email, github, linkedin}){
    const[copied,setCopied]=useState(false)

    function handleCopy(){
        navigator.clipboard.writeText(email)
        setCopied(true)
    }
    return(
        <div>
            <h2>Contact</h2>
            <p>Email: {email}</p>
            <button onClick={handleCopy}>
                {copied?"Copied!":"Copy Email"}
            </button>
            <p>
                <a href={github} target="_blank" rel="noneferrer">GitHub</a><br></br>
                <a href={linkedin} target="_blank" rel="noneferrer">LinkedIn</a>
            </p>
        </div>

    )
}

export default Contact
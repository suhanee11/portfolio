import { useState } from 'react'
import './Contact.css'

function Contact({ email, github, linkedin }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="contact" id="contact">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-card">
        <p className="contact-email">{email}</p>
        <button className="contact-copy-btn" onClick={handleCopy}>
          {copied ? "✓ Copied!" : "Copy Email"}
        </button>
        <div className="contact-links">
          <a href={github} target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
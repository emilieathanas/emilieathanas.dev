import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
        <h2>{`</EA>`}</h2>
        </div>
        <div className="nav-links">
          <a className="nav-link" href="/projects">
            Projects
          </a>
          <a className="nav-link" href="/experience">
            Experience
          </a>
          <a className="nav-link" href="/contact">
            Contact
          </a>
          </div>
        </div>
    </nav>
  )
}

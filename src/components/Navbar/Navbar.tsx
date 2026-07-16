import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
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
    </nav>
  )
}

import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>My App is</h2>
      </div>
      <ul className="navmenu">
        <li className="navitem">
          <a href="/" className="navlink">
            Home
          </a>
        </li>
        <li className="navitem">
          <a href="/about" className="navlink">
            About
          </a>
        </li>
        <li className="navitem">
          <a href="/contact" className="navlink">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

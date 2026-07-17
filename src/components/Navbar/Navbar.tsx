import './Navbar.css'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

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

        <div className="hamburger-container">
          <Sheet>
            <SheetTrigger render={<Menu />} aria-label="Open menu" />
            <SheetContent side="right">
              <nav className="mobile-nav">
                <div className="mobile-nav-container">
                  <a className="mobile-nav-link" href="/projects">
                    Projects
                  </a>
                  <a className="mobile-nav-link" href="/experience">
                    Experience
                  </a>
                  <a className="mobile-nav-link" href="/contact">
                    Contact
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

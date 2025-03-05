import NavbarLink from "./NavbarLink"
import { useRef } from "react";

import "./Navbar.scss";

function Navbar() {
    const navBarLinks = useRef<HTMLDivElement>(null);
    
    return (
        <nav className="navbar">
          <div ref={navBarLinks} className="nav-links hidden-links">
            <div className="nav-item">
              <NavbarLink text="介紹" link="#intro" />
            </div>
            <div className="nav-item">
              <NavbarLink text="社群連結" link="#media" />
            </div>
          </div>
        </nav>
    );
}

export { Navbar };
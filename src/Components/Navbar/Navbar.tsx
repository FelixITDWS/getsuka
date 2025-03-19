import "./Navbar.scss";

import NavbarLink from "./NavbarLink"
import { useRef } from "react";

import getsukaLogo from "../../assets/getsuka-logo.png";
import hambar from '../../assets/hambar.svg'
import hambarFocus from '../../assets/hambar-focus.svg'

function Navbar() {
    const navBarLinks = useRef<HTMLDivElement>(null);
    
    return (
        <nav className="navbar">
          <div className="logo-container">
            <a href="#">
              <img src={getsukaLogo} alt="Getsuka Logo" />
            </a>
          </div>
          <div className="nav-links">
            <div ref={navBarLinks} className="nav-links hidden-links">
              <div className="nav-item">
                <NavbarLink text="介紹" link="#intro" />
              </div>
              <div className="nav-item">
                <NavbarLink text="相關人物" link="#member" />
              </div>
              <div className="nav-item">
                <NavbarLink text="更多資訊" link="#more-info" />
              </div>
            </div>
          </div>
        </nav>
    );
}

export { Navbar };
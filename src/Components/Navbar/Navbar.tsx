import "./Navbar.scss";
import NavbarLink from "./NavbarLink"
import { useState, useRef } from "react";
import getsukaLogo from "../../assets/getsuka-logo.png";
import hambar from '../../assets/hambar.svg'
import hambarFocus from '../../assets/hambar-focus.svg'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navBarLinks = useRef<HTMLDivElement>(null);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <a href="#">
                    <img src={getsukaLogo} alt="Getsuka Logo" />
                </a>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <img 
                    src={isMenuOpen ? hambarFocus : hambar} 
                    alt="menu"
                />
            </div>

            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <div ref={navBarLinks} className="nav-links-container">
                    <div className="nav-item" onClick={handleLinkClick}>
                        <NavbarLink text="介紹" link="#intro" />
                    </div>
                    <div className="nav-item" onClick={handleLinkClick}>
                        <NavbarLink text="相關人物" link="#member" />
                    </div>
                    <div className="nav-item" onClick={handleLinkClick}>
                        <NavbarLink text="更多資訊" link="#more-info" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export { Navbar };
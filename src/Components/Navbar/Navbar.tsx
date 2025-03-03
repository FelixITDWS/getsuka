import Logo from "./Logo"
import NavbarLink from "./NavbarLink"

import { MouseEvent, useRef, useState } from "react"

import hambar from "/src/assets/hambar.svg"
import hambarFocus from "/src/assets/hambar-focus.svg"

function Navbar() {
//   const [clickedIdx, setClickedIdx] = useState<number>(15);
  const navBarLinks = useRef<HTMLDivElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleHamBarClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const navBarLinksElement = navBarLinks.current;
    if (navBarLinksElement) {
      navBarLinksElement.classList.toggle("-bottom-[200px]");
      navBarLinksElement.classList.toggle("bottom-10");
    }
  }


  return (
    <nav className="bg-white flex items-center justify-between lg:pt-[12px] lg:pb-[22px] pb-[2px] z-50 fixed w-screen">
      <div className="flex-1 lg:flex-grow-0 PC:flex-grow-1">
        <Logo />
      </div>
      <div className="active:opacity-80 active:bg-secondary focus:bg-secondary bg-primary block lg:hidden">
        <a onFocus={() =>setIsFocus(true)} onBlur={() => setIsFocus(false)} href="#" onClick={handleHamBarClick}>
          <img className="p-2" src={isFocus ? hambarFocus : hambar} alt="hambar" />
        </a>
      </div>
      <div ref={navBarLinks} className="transition-all duration-[400ms] ease-linear absolute w-full text-center bottom-10 bg-secondary lg:static lg:bg-white lg:flex lg:items-center lg:justify-between lg:w-auto lg:bottom-0 lg:py-2 lg:pr-4">
        <div className="py-2 lg:py-0 pr-5 lg:pr-3 relative">
          <NavbarLink text="介紹" link="#intro"/>
        </div>
        <div className="py-2 lg:py-0 pr-5 lg:pr-3">
          <NavbarLink text="社群連結" link="#media"/>
        </div>
      </div>
    </nav>
  )
}

export { Navbar };
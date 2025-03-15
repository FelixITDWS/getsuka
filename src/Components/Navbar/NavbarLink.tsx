import './NavbarLink.scss';

function NavbarLink({ text, link }: { text: string, link: string }){
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (!element) return;

    // the position should cut the navbar height
    const position = element.getBoundingClientRect()?.top + window.scrollY - 120;
    window.scrollTo({ top: position, behavior: 'smooth' });
  }

  return (
    <a data-text={text} href={link} onClick={handleClick} type="button" className="navbarlink">
      {text}
    </a>
  )
}

export default NavbarLink;
// Header.jsx
import NavLink from "./NavLink";

function Header() {
  return (
    <header className="sticky top-0 uppercase bg-backgroundDarker bg-opacity-50 p-4 z-10 mb-5">
      <ul className="flex justify-center gap-4 md:gap-10 lg:gap-16">
        <NavLink href="#landing">Home</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#github">GitHub</NavLink>
      </ul>
    </header>
  );
}

export default Header;

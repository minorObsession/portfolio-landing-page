// Header.jsx
import NavLink from "./NavLink";

function Header() {
  return (
    <header className="sticky top-0 uppercase bg-backgroundDarker bg-opacity-50 p-4 z-10">
      <ul className="flex justify-center gap-4 lg:gap-6">
        <NavLink href="#landing">Home</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#github">GitHub</NavLink>
      </ul>
    </header>
  );
}

export default Header;

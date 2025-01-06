import NavLink from "./NavLink";

function Header() {
  return (
    <nav className="sticky top-0 uppercase bg-gray-900 bg-opacity-80 p-4 z-10 mb-5">
      <ul className="flex justify-center gap-4 md:gap-10 lg:gap-16">
        <NavLink href="#landing">Home</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#github">GitHub</NavLink>
      </ul>
    </nav>
  );
}

export default Header;

import NavigationLink from "./NavigationLink";

function Header() {
  function scrollToSection(e, sectionName) {
    console.log("started");
    e.preventDefault();
    document
      .getElementById(`${sectionName}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed w-full top-0 uppercase bg-gray-900 bg-opacity-80 p-4 z-10 mb-5">
      <ul className="flex justify-center gap-4 md:gap-10 lg:gap-16">
        <NavigationLink onClick={(e) => scrollToSection(e, "about")}>
          About
        </NavigationLink>
        <NavigationLink onClick={(e) => scrollToSection(e, "projects")}>
          Projects
        </NavigationLink>
        <NavigationLink onClick={(e) => scrollToSection(e, "contact")}>
          Contact
        </NavigationLink>
        <NavigationLink onClick={(e) => scrollToSection(e, "projects")}>
          GitHub
        </NavigationLink>
      </ul>
    </nav>
  );
}

export default Header;

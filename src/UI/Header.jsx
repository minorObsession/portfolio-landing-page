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
    <nav className="fixed top-0 z-10 w-full uppercase p-19 ">
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

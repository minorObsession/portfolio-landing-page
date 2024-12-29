// NavLink.jsx

function NavLink({ href, children }) {
  return (
    <li className="tracking-wide text-stone-50 hover:text-accentHover hover-up cursor-pointer">
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavLink;

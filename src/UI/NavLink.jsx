// NavLink.jsx

function NavLink({ href, children }) {
  return (
    <li className="flex-grow-0 tracking-wide font-semibold hover:text-accentHover  cursor-pointer relative group">
      <a href={href} className="relative group-hover:text-accentHover">
        {children}
        <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-accentHover scale-x-0 group-hover:scale-x-100 transition-all duration-190 origin-left"></span>
      </a>
    </li>
  );
}

export default NavLink;

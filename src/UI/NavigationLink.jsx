function NavigationLink({ href, children, onClick }) {
  return (
    <li
      onClick={onClick}
      className="relative flex-grow-0 tracking-wide font-semibold text-accent hover:text-accentHover cursor-pointer group"
    >
      <a href={href} className="relative group-hover:text-accentHover">
        {children}
        <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-accentHover scale-x-0 group-hover:scale-x-100 transition-all duration-260 origin-left"></span>
      </a>
    </li>
  );
}

export default NavigationLink;

function Sidebar() {
  return (
    <aside className="flex mt-6 space-x-4">
      {/* // ! LinkedIn Link */}
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
      </a>
      {/* // ! GitHub Link */}
      <a
        href="https://github.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/github.png" alt="GitHub" className="w-8 h-8" />
      </a>
      {/* // ! Twitter Link */}
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/twitter.png" alt="Twitter" className="w-8 h-8" />
      </a>
    </aside>
  );
}

export default Sidebar;

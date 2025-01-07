// src/UI/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Bogdan. All rights reserved.</p>
      <div className="mt-2">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            className="w-6 h-6 inline"
          />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <img
            src="/icons/github.png"
            alt="GitHub"
            className="w-6 h-6 inline"
          />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <img
            src="/icons/twitter.png"
            alt="Twitter"
            className="w-6 h-6 inline"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

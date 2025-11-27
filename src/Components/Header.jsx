import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const links = [
  { title: "Home", key: "1", link: "#" },
  { title: "Projects", key: "2", link: "#projects" },
  { title: "About Me", key: "3", link: "#aboutme" },
  { title: "Contact", key: "4", link: "#footer" },
];
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-950 text-white w-[90%] rounded-full m-auto shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl  flex items-center justify-between  py-5 px-6">
        <div className="text-2xl font-bold tracking-wide">
          <img
            src={Logo}
            alt=""
            style={{ display: "inline" }}
            className="mr-3"
          />
          My <span className="text-blue-400">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-lg">
            {links.map((link) => (
              <a
                href={link.link}
                key={link.key}
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {link.title}
              </a>
            ))}
          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-slate-900 py-4 px-6">
          <ul className="flex flex-col gap-4 text-lg">
            {links.map((link) => (
              <li
                key={link.key}
                className="hover:text-blue-400 text-center transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

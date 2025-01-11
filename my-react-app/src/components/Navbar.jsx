import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`p-4  text-black dark:text-white dark:bg-black flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "shadow-lg bg-[#A35C7A] dark:border-b-2" : ""
        }`}
      >
        <ThemeToggle />

        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden sm:flex justify-end">
          <NavLinks />
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-[#A35C7A] text-black dark:text-white dark:bg-black p-4">
          <NavLinks />
        </div>
      )}
    </>
  );
};

const NavLinks = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-end">
        <div className="px-4 py-2 relative group">
          <Link to="/" className="relative z-10">
            Home
          </Link>
          <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out dark:bg-white"></div>
        </div>

        <div className="px-4 py-2 relative group">
          <Link to="/Projects" className="relative z-10">
            Projects
          </Link>
          <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out dark:bg-white"></div>
        </div>

        <a
          href="/Resume_Sarthak_Gadge.pdf"
          download="Resume_Sarthak_Gadge.pdf"
          className="px-4 py-2 relative group"
        >
          Resume
          <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out dark:bg-white"></div>
        </a>

        <div className="px-4 py-2 relative group">
          <Link to="/contact" className="relative z-10">
            Contact Me
          </Link>
          <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out dark:bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

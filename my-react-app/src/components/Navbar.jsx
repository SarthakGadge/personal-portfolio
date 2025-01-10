import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle ";
// import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <>
      <div className="p-4 text-[#FF7F50] bg-[#FFD700] flex justify-between dark:text-white dark:bg-black">
        <ThemeToggle />
        <div className="flex justify-end ">
          <div className="px-4 hover:text-red-600 transition-colors">
            <Link to="/">Home</Link>
          </div>
          <div className="px-4 hover:text-red-600 transition-colors">
            <Link to="/Projects">Projects</Link>
          </div>
          <a
            href="/Resume_Sarthak_Gadge.pdf" // Replace with the actual path to your resume
            download="Resume_Sarthak_Gadge.pdf" // The name that will appear when downloaded
            className="px-4 hover:text-red-600 transition-colors"
          >
            Resume
          </a>
          <div className="px-4 hover:text-red-600 transition-colors">
            <Link to="/Hire">Contact Me</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

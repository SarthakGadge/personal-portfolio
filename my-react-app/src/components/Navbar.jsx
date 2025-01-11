import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle ";
// import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <>
      <div className="p-4 text-black bg-[#A35C7A] flex justify-between dark:text-white dark:bg-black">
  <ThemeToggle />
  <div className="flex justify-end">
    <div className="px-4 relative group">
      <Link to="/" className="relative z-10">Home</Link>
      <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></div>
    </div>

    <div className="px-4 relative group">
      <Link to="/Projects" className="relative z-10">Projects</Link>
      <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></div>
    </div>

    <a
      href="/Resume_Sarthak_Gadge.pdf" // Replace with the actual path to your resume
      download="Resume_Sarthak_Gadge.pdf" // The name that will appear when downloaded
      className="px-4 relative group"
    >
      Resume
      <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></div>
    </a>

    <div className="px-4 relative group">
      <Link to="/Hire" className="relative z-10">Contact Me</Link>
      <div className="absolute left-2 right-2 bottom-0 h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></div>
    </div>
  </div>
</div>


    </>
  );
};

export default Navbar;

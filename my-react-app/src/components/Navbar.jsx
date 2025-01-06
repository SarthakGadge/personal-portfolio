import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-end p-4 text-gray-300">
      <div className="px-4 hover:text-blue-400 transition-colors">
        <Link to="/">Home</Link>
      </div>
      <div className="px-4 hover:text-blue-400 transition-colors">
        <Link to="/Services">Projects</Link>
      </div>
      <div className="px-4 hover:text-blue-400 transition-colors">
        <Link to="/Credentials">TimeLine</Link>
      </div>
      <div className="px-4 hover:text-blue-400 transition-colors">
        <Link to="/Hire">Contact Me</Link>
      </div>
    </div>
  );
};

export default Navbar;

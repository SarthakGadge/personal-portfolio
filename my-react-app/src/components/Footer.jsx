import { SiGithub } from "react-icons/si";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import { GmailModal } from "./GmailModal";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-5 bg-[#A35C7A] dark:bg-black">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl text-white font-inter dark:text-white">
        Get In Touch
      </h1>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 sm:space-x-8">
        {/* GitHub Icon */}
        <SiGithub
          onClick={() =>
            window.open("https://github.com/SarthakGadge", "_blank")
          }
          className="w-6 h-6 sm:w-8 sm:h-8 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200"
        />

        {/* LinkedIn Icon */}
        <img
          onClick={() =>
            window.open("https://linkedin.com/in/sarthakgadge243", "_blank")
          }
          src={LinkedIn}
          alt="LinkedIn logo"
          className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
        />

        {/* Gmail Modal */}
        <GmailModal />
      </div>

      {/* Copyright Text */}
      <h2 className="text-xs sm:text-sm text-gray-100 dark:text-gray-400 text-center">
        © 2025 Sarthak Gadge. All rights reserved
      </h2>
    </div>
  );
};

export default Footer;

import { SiGithub } from "react-icons/si";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import Whatsapp from "../assets/whatsapp-svgrepo-com.svg";
import { GmailModal } from "./GmailModal";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100px] bg-[#b8b8ff] space-y-5 py-[100px] dark:bg-black">
        <div>
          <h1 className="text-2xl text-[#540d6e] font-inter dark:text-white">
            Get In Touch
          </h1>
        </div>
        <div className="flex justify-center space-x-[30px]">
          <SiGithub
            onClick={() =>
              window.open("https://github.com/SarthakGadge", "_blank")
            }
            className="w-8 h-8 text-black dark:text-white"
          />

          <img
            onClick={() =>
              window.open("https://linkedin.com/in/sarthakgadge243")
            }
            src={LinkedIn}
            alt="LinkedIn logo"
            className="w-8 h-8 mr-3"
          />

          <GmailModal />

          <img src={Whatsapp} alt="Gmail logo" className="w-8 h-8 mr-3" />
        </div>
        <h2 className="text-gray-500">
          © 2025 Sarthak Gadge. All rights reserved
        </h2>
      </div>
    </>
  );
};

export default Footer;

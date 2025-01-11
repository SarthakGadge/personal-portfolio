import { useState } from "react";
import Gmail from "../assets/gmail-svgrepo-com.svg";
import { BsClipboard2 } from "react-icons/bs";

export const GmailModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "sarthakgadge43@gmail.com";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClosedModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div>
        <img
          src={Gmail}
          alt="Gmail logo"
          className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={handleOpenModal}
        />

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-[400px] h-[230px] dark:bg-black dark:text-white">
              <h3 className="text-xl font-bold mb-4">My Email Address</h3>
              <p className="pb-3">Hello There! Here is my email address</p>
              <div>
                <div className="flex space-x-5">
                  <p className="text-red-400">{email}</p>
                  <button
                    onClick={handleCopyToClipboard}
                    className="text-gray-500 hover:text-gray-700"
                    title="Copy to clipboard"
                  >
                    <BsClipboard2 className="w-5 h-5 dark:text-white" />
                  </button>
                </div>
                <button
                  onClick={handleClosedModal}
                  className="mt-7 px-4 py-2 bg-red-500 text-white rounded dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-2 dark:hover:border-white"
                >
                  Close
                </button>
                {copied && (
                  <div className="fixed bottom-[75px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
                    Copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

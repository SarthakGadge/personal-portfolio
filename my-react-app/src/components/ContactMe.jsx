import { useState } from "react";

export const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const email = "sarthakgadge43@gmail.com";

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-[50px] flex-grow justify-center">
        <h1 className="text-5xl text-[#2D8F89] font-bold underline dark:text-blue-500">
          Contact Me
        </h1>
        <div className="flex flex-col space-y-10 w-[70%] text-center">
          <p className="text-gray-700 dark:text-white text-base sm:text-2xl">
            If you are looking to get ahold of me, you can send me an email at
            {"   "}
            <a
              className="underline text-red-700 hover:underline hover:text-black hover:cursor-pointer dark:hover:text-[#C890A7] text-base sm:text-2xl"
              onClick={handleCopyToClipboard}
            >
              {email}
            </a>
          </p>
          <p className="text-gray-700 text-base sm:text-2xl dark:text-white">
            You are also reach out to me at LinkedIn{" "}
            <a
              className="underline hover:underline hover:text-black text-red-700 hover:cursor-pointer dark:hover:text-[#C890A7]"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sarthakgadge243/",
                  "_blank"
                )
              }
            >
              @Sarthak
            </a>
          </p>
          {copied && (
            <div className="fixed bottom-[75px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
              Copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

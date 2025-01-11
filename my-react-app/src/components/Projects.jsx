import BookImg from "../assets/premium_photo-1677567996070-68fa4181775a.avif";
import BookImg2 from "../assets/photo-1526628953301-3e589a6a8b74.avif";
import { SiGithub } from "react-icons/si";
import postman from "../assets/postman-icon-svgrepo-com.svg";

export const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-[#2D8F89] mb-8">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-[30px] lg:space-x-[150px]">
        {/* BookNest Project */}
        <div className="relative flex flex-col my-6 bg-white shadow-sm w-full sm:w-96 bg-coral border-2 border-black p-5 rounded-lg text-center">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={BookImg} alt="card-image" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-[#C890A7] text-xl font-semibold">
              BookNest
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              BookNest is a platform designed for book lovers to explore,
              review, and discuss books. It allows users to track their reading
              progress, manage their bookshelves, and participate in book
              discussions. The backend is built using Django, and the API is
              fully documented on Postman.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-6 space-x-8 flex justify-center">
            <SiGithub
              onClick={() =>
                window.open(
                  "https://github.com/SarthakGadge/BookNest",
                  "_blank"
                )
              }
              className="w-6 h-6 sm:w-8 sm:h-8 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200"
            />
            <img
              src={postman}
              className="w-6 h-6 sm:w-8 sm:h-8 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={() =>
                window.open(
                  "https://documenter.getpostman.com/view/23848515/2sAYQWJszf",
                  "_blank"
                )
              }
            />
          </div>
        </div>

        {/* Sentiment Analysis Project */}
        <div className="relative flex flex-col my-6 bg-white shadow-sm w-full sm:w-96 bg-coral border-2 border-black p-5 rounded-lg text-center">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={BookImg2} alt="card-image" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-[#C890A7] text-xl font-semibold">
              Sentiment Analysis Project{" "}
            </h6>
            <p className="text-slate-600 leading-normal font-light">
              This project uses Hugging Face&apos;s Transformers library to
              perform sentiment analysis on text data. The goal is to determine
              the emotional tone behind user reviews, particularly focusing on
              restaurant reviews from Yelp. The project leverages pre-trained
              Transformer models (such as BERT) for sentiment classification,
              scoring reviews from 1 to 5 stars.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2 flex justify-center">
            <SiGithub
              onClick={() =>
                window.open(
                  "https://github.com/SarthakGadge/Sentiment-Analysis",
                  "_blank"
                )
              }
              className="w-6 h-6 sm:w-8 sm:h-8 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      <h3 className="my-11 text-center text-gray-700 text-2xl">
        Exciting new projects are in the works! Stay tuned for updates as I
        build more full-stack solutions
      </h3>
    </div>
  );
};

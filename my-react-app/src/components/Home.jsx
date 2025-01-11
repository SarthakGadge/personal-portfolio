// import Navbar from "./Navbar"
import pic from "../assets/pic.jpeg";
import backend from "../assets/server_stack.svg";
import others from "../assets/others.svg";
import frontend from "../assets/code_bracket.svg";
import Timeline from "../components/Timeline.jsx";

const Home = () => {
  return (
    <>
      <section className="justify-center flex flex-col items-center h-screen px-4">
        <div className="relative flex justify-center">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-[#4C6E91] via-[#2D8F89] to-[#4C6E91] p-2 dark:bg-white dark:bg-none">
            <img
              src={pic}
              alt="Description"
              className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover shadow-2xl border-2 border-black"
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="pb-4 text-4xl sm:text-7xl font-bold bg-gradient-to-r from-[#4C6E91] via-[#2D8F89] to-[#4C6E91] bg-clip-text text-transparent dark:text-white">
            Sarthak Gadge
          </h1>
          <p className="mt-2 text-gray-700 text-lg sm:text-2xl font-poppins dark:text-white">
            Full Stack Developer | Backend Developer | Python | React
          </p>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <button className="dark:bg-black dark:bg-none dark:border-white dark:border-2 dark:hover:bg-white dark:hover:text-black p-3 px-6 bg-gradient-to-r from-[#4C6E91] via-[#2D8F89] to-[#4C6E91] text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Contact Me
          </button>
          <button className="dark:bg-none dark:text-black dark:border-0 dark:hover:bg-black dark:hover:text-white dark:hover:border-white dark:hover:border-2 p-3 px-6 bg-white text-[#4C6E91] border border-[#4C6E91] font-medium rounded-full shadow-lg hover:bg-[#4B5563] hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View Project
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center my-7 px-4 dark:bg-black justify-center h-[300px]">
        <div className="flex flex-col space-y-8 w-[80%]">
          <h1 className="text-3xl sm:text-5xl text-[#2D8F89] font-inter dark:text-blue-500 text-center underline font-bold">
            About Me
          </h1>
          <p className="text-gray-700 text-base sm:text-xl font-poppins dark:text-white text-center w-full sm:text-left">
            I am a detail-oriented Software Engineer and Full Stack Developer
            specializing in backend development, with a strong focus on Python
            and Django. I have experience designing and optimizing RESTful APIs,
            implementing secure JWT authentication, and integrating Razorpay for
            seamless payment solutions. Proficient in MySQL database management,
            I also utilize AWS S3 for efficient file storage. Testing APIs in
            Postman has been a key part of my workflow to ensure reliability and
            robustness. While my primary expertise lies in backend development,
            I also have a skill set in frontend technologies, particularly in
            React, to build responsive and user-friendly web applications.
          </p>
        </div>
      </section>

      <section>
        <Timeline />
      </section>

      <section className="flex flex-col items-center justify-center py-16 space-y-10 dark:bg-black">
        <h1 className="text-3xl sm:text-5xl text-[#2D8F89] font-inter dark:text-blue-500 text-center underline font-bold">
          My Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-10 font-poppins">
          <div className="flex flex-col items-center space-y-4 border-2 shadow-lg rounded-lg w-[90%] sm:w-[300px] h-auto sm:h-[350px] p-6 dark:bg-gray-900">
            <div className="flex items-center space-x-5">
              <h2 className="text-[#2D8F89] text-2xl sm:text-3xl">FrontEnd</h2>
              <img
                src={frontend}
                alt="Frontend"
                className="w-6 sm:w-8 h-6 sm:h-8"
              />
            </div>
            <ul className="text-sm sm:text-xl space-y-2 text-gray-700 list-disc dark:text-white">
              <li>Javascript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>API Integration</li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-4 border-2 shadow-lg rounded-lg w-[90%] sm:w-[300px] h-auto sm:h-[350px] p-6 dark:bg-gray-900">
            <div className="flex items-center space-x-5">
              <h2 className="text-[#2D8F89] text-2xl sm:text-3xl">BackEnd</h2>
              <img
                src={backend}
                alt="Backend"
                className="w-6 sm:w-8 h-6 sm:h-8"
              />
            </div>
            <ul className="text-sm sm:text-xl space-y-2 text-gray-700 list-disc dark:text-white">
              <li>Python</li>
              <li>Django</li>
              <li>Flask</li>
              <li>RESTful APIs</li>
              <li>Database Design</li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-4 border-2 shadow-lg rounded-lg w-[90%] sm:w-[300px] h-auto sm:h-[350px] p-6 dark:bg-gray-900">
            <div className="flex items-center space-x-5">
              <h2 className="text-[#2D8F89] text-2xl sm:text-3xl">Others</h2>
              <img
                src={others}
                alt="Others"
                className="w-6 sm:w-8 h-6 sm:h-8"
              />
            </div>
            <ul className="text-sm sm:text-xl space-y-2 text-gray-700 list-disc dark:text-white pl-5">
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Git/GitHub</li>
              <li>Postman</li>
              <li>SalesForce AI associate</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

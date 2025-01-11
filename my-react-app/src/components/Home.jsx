// import Navbar from "./Navbar"
import pic from "../assets/pic.jpeg";
import backend from "../assets/server_stack.svg";
import others from "../assets/others.svg";
import frontend from "../assets/code_bracket.svg";
import Timeline from "../components/Timeline.jsx";

const Home = () => {
  return (
    <>
      <section className="justify-center flex flex-col items-center h-screen">
  <div className="relative flex justify-center">
    <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#4C6E91] via-[#2D8F89] to-[#4C6E91] p-2 dark:bg-white dark:bg-none">
      <img
        src={pic}
        alt="Description"
        className="w-44 h-44 rounded-full object-cover shadow-2xl border-2 border-black"
      />
    </div>
  </div>
  <div>
    <h1 className="text-7xl font-bold flex justify-center py-3 bg-gradient-to-r from-[#4C6E91] via-[#2D8F89] to-[#4C6E91]  bg-clip-text text-transparent dark:text-white">
      Sarthak Gadge
    </h1>
    <p className="justify-center flex mt-2 text-gray-700 text-2xl font-poppins dark:text-white">
      Full Stack Developer | Backend Developer | Python | React
    </p>
  </div>
  <div className="justify-center flex mt-5 space-x-4">
    <button className="dark:bg-black dark:bg-none dark:border-white dark:border-2 dark:hover:bg-white dark:hover:text-black p-3 px-6 bg-gradient-to-r from-[#4C6E91] via-[#2D8F89] to-[#4C6E91] text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      Contact Me
    </button>
    <button className="dark:bg-none dark:text-black dark:border-0 dark:hover:bg-black dark:hover:text-white dark:hover:border-white dark:hover:border-2 p-3 px-6 bg-white text-[#4C6E91] border border-[#4C6E91] font-medium rounded-full shadow-lg hover:bg-[#4B5563] hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      View Project
    </button>
  </div>
</section>



      <section className=" flex justify-center my-10 dark:bg-black">
        <div className="flex flex-col space-y-8 mx-5">
          <h1 className="text-5xl text-[#FF7F50] font-inter dark:text-blue-500">
            About Me
          </h1>
          <p className="text-gray-500 text-xl font-poppins w-[70%] dark:text-white">
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

      <section className="flex h-screen flex-col items-center justify-center space-y-[100px] dark:bg-black">
        <div>
          <h1 className="text-5xl text-[#FF7F50] font-inter dark:text-blue-500">
            My Skills
          </h1>
        </div>

        <div className="flex justify-center space-x-[150px] font-poppins">
          <div className="flex space-y-[40px] flex-col border-2 shadow-lg rounded-lg w-[300px] h-[350px] px-[50px] py-[40px]">
            <div className="flex space-x-5">
              <h2 className="text-blue-500 text-3xl ">FrontEnd</h2>
              <img src={frontend} alt="Frontend" className="w-8 h-8 mr-3 " />
            </div>
            <ul className="text-xl space-y-[10px] text-gray-500 list-disc dark:text-white">
              <li>Javascript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>API Integration</li>
            </ul>
          </div>

          <div className="flex space-y-[40px] flex-col border-2 shadow-lg rounded-lg w-[300px] h-[350px] px-[50px] py-[40px] ">
            <div className="flex space-x-5">
              <h2 className="text-blue-500 text-3xl">BackEnd</h2>
              <img src={backend} alt="Backend" className="w-8 h-8 mr-3 " />
            </div>
            <ul className="text-xl space-y-[10px] text-gray-500 list-disc dark:text-white">
              <li>Python</li>
              <li>Django</li>
              <li>Flask</li>
              <li>RestFull API&apos;s</li>
              <li>Database Design</li>
            </ul>
          </div>

          <div className="flex space-y-[40px] flex-col border-2 shadow-lg rounded-lg w-[300px] h-[350px] px-[50px] py-[40px]">
            <div className="flex space-x-5">
              <h2 className="text-blue-500 text-3xl">Others</h2>
              <img src={others} alt="others" className="w-8 h-8 mr-3" />
            </div>
            <ul className="text-xl space-y-[10px] text-gray-500 list-disc dark:text-white">
              <li>SalesForce AI associate</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Git/GitHub</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

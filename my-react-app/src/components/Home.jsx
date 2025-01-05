// import Navbar from "./Navbar"
import pic from "../assets/pic.jpeg";

const Home = () => {
  return (
    <>
      <section className="justify-center flex flex-col items-center h-screen">
        <div className="relative flex justify-center">
          <div className="w-48 h-48 rounded-full bg-white p-2">
            <img
              src={pic}
              alt="Description"
              className="w-44 h-44 rounded-full object-cover shadow-2xl border-2 border-black"
            />
          </div>
        </div>
        <div>
          <h1 className="text-7xl font-bold flex justify-center py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sarthak Gadge
          </h1>
          <p className="justify-center flex mt-2 text-gray-400 text-2xl font-poppins">
            Full Stack Developer | Backend Developer | Python | React
          </p>
        </div>
        <div className="justify-center flex mt-5 space-x-4">
          <button className="p-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Contact Me
          </button>
          <button className="p-3 px-6 bg-white text-blue-500 border border-blue-500 font-medium rounded-full shadow-lg hover:bg-blue-500 hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View Project
          </button>
        </div>
      </section>

      <hr className="border-t-1 border-gray-300 my-8" />

      <section className=" flex justify-center shadow-sm my-[100px]">
        <div className="text-white flex flex-col space-y-8 mx-5">
          <h1 className="text-5xl text-blue-500 font-inter">About Me</h1>
          <p className="text-gray-400 text-xl font-poppins w-[70%]">
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

      <hr className="border-t-1 border-gray-300 my-8" />

      <section className="flex h-screen flex-col items-center justify-center space-y-[100px]">
        <div>
          <h1 className="text-5xl text-blue-500 font-inter">My Skills</h1>
        </div>

        <div className="flex justify-center space-x-[150px] font-poppins">
          <div className="flex space-y-[40px] flex-col border-1 border-white rounded-lg p-6 w-[300px] h-[350px] bg-gray-800">
            <h2 className="text-white text-3xl">FrontEnd</h2>
            <ul className="text-xl space-y-[10px] text-gray-400">
              <li>Javascript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>API Integration</li>
            </ul>
          </div>

          <div className="flex space-y-[40px] flex-col border-1 border-white rounded-lg p-6 w-[300px] h-[350px] bg-gray-800">
            <h2 className="text-white text-3xl">BackEnd</h2>
            <ul className="text-xl space-y-[10px] text-gray-400">
              <li>Python</li>
              <li>Django</li>
              <li>Flask</li>
              <li>RestFull API&apos;s</li>
              <li>Database Design</li>
            </ul>
          </div>

          <div className="flex space-y-[40px] flex-col border-1 border-white rounded-lg p-6 w-[300px] h-[350px] bg-gray-800">
            <h2 className="text-white text-3xl">Other</h2>
            <ul className="text-xl space-y-[10px] text-gray-400">
              <li>SalesForce AI associate</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Git/GitHub</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-t-1 border-gray-300 my-8" />

      <section></section>
    </>
  );
};

export default Home;

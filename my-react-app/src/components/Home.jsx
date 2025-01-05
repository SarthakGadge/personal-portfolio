// import Navbar from "./Navbar"

const Home = () => {
  return (
    <>
      <section className="justify-center flex flex-col items-center h-screen">
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
      <section className="h-screen flex justify-center shadow-sm">
        <div className="text-white flex flex-col justify-center items-center space-y-8 mx-[250px]">
          <h1 className="text-5xl text-blue-500 font-inter">About Me</h1>
          <p className="text-center text-gray-400 text-xl font-poppins">
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
    </>
  );
};

export default Home;

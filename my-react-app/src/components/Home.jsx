// import Navbar from "./Navbar"

const Home = () => {
  return (
    <>
    <section className="mt-[150px] justify-center">
      <div>
        <h1 className="text-4xl font-bold flex justify-center">Sarthak Gadge</h1>
        <p className="justify-center flex mt-2">Full Stack Developer | Backend Developer | Python | React</p>
      </div>
      <div className="justify-center flex mt-5 space-x-4">
        <button className="px-5 hover:bg-white hover:text-black bg-black py-1 text-white hover:shadow-lg rounded-full">Contact Me</button>
        <button className="px-5 hover:bg-white hover:text-black bg-black py-1 text-white hover:shadow-lg rounded-full">View Project</button>
      </div>
    </section>
    </>
  )
}

export default Home

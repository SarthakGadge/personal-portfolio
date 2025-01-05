import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-end p-4 text-black">
      <div className='px-4'><Link to="/">Home</Link></div>
      <div className='px-4'><Link to="/Services">Services</Link></div>
      <div className='px-4'><Link to="/Skills">Skills</Link></div>
      <div className='px-4'><Link to="/Credentials">Credentials</Link></div>
      <div className='px-4'><Link to="/Hire">Hire Me</Link></div>
    </div>
  )
}

export default Navbar



import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg";
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const menuList = <>
<li className='lg:me-2'><Link to="/">Home</Link></li>
<li className='lg:me-2'><Link to="/order">Order</Link></li>
<li className='lg:me-2'><Link to="/services">services</Link></li>
<li className='lg:me-2'><Link to="/blog">blog</Link></li>
<li className='lg:me-2'><Link to="/contact">contact</Link></li>
</>


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleeLogout = () => {
    logOut()
      .then(() => {
        
      })
      .catch(error => console.log(error))
    
  }

    return (
      <div className='container mx-auto'>
        <div className="navbar bg-base-100 lg:px-20">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {menuList}
              </ul>
            </div>
            <Link to="/" className="normal-case text-xl">
              <img src={logo} className='h-10' alt="logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuList}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user?.email ? <Link className='btn rounded-none capitalize btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#FF3811] text-[#FF3811]' onClick={handleeLogout}>Logout</Link> :
                <>
                <div className='flex justify-center items-center gap-5'>
              <span><BsBag/></span>
              <span><AiOutlineSearch/></span>
              <Link className='btn rounded-none capitalize btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] border-[#FF3811] text-[#FF3811]' to="/register">Appointment</Link>
            </div>
                </>
           }
          </div>
        </div>
      </div>
    );
};

export default Header;
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/logo.png"
import { AuthContext } from './Context/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const links = <>
         <NavLink> <li>Home</li></NavLink>
         <NavLink  className="ms-5" to="/coverage"> <li>Coverage</li></NavLink>
        
       
  </>
 const {user,logOut}= use(AuthContext)

 const handleLogout = ()=>{
  logOut().then(res=>{
    console.log(res.user)
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "LogOut successFully",
  showConfirmButton: false,
  timer: 1500
});
  }).catch(error=>console.log(error));
  
 }
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img src={logo} alt=""  />
    <span className='font-bold text-xl -ms-2'>Profast</span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center gap-4">
      {
        user ? (
          <div className="relative group">
            <img
              src={user.photoURL|| "img"}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            {/* Dropdown on hover */}
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition duration-300 z-10">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                Signup
              </button>
            </Link>
          </div>
        )
      }
    </div>

  </div>
</div>
  );
};

export default Navbar;
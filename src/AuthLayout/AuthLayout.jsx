import React from 'react';
import authImg from "../assets/auth.png";
import logo from "../assets/logo.png";
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
   <div>
      <div className='flex m-8 items-center gap-2 mb-6'>
          <img src={logo} alt="ProFast Logo" className="w-10" />
          <span className='text-2xl font-bold text-gray-800 -ms-2'>ProFast</span>
        </div>
         <div className="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto px-4">
      {/* Left: Form Area */}
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-8">
      

        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      {/* Right: Image Side */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-amber-50 items-center justify-center">
        <img src={authImg} alt="Auth Illustration" className="max-w-xs rounded-lg shadow-xl" />
      </div>
    </div>
   </div>
  );
};

export default AuthLayout;

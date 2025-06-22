import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
    <div className='min-h-screen'>
        <Outlet></Outlet>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
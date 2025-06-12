import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const RootLayouts = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className='flex-grow pt-10 [@media(min-width:1200px)]:pt-[70px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};

export default RootLayouts;
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const RootLayouts = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar theme="theme2" />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayouts
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const RootLayouts = ({theme}) => {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <Navbar theme={theme} />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayouts
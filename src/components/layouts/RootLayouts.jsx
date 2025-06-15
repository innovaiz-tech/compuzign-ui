import React from 'react'
import { Outlet } from 'react-router'
import Headers from './headers';


const RootLayouts = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Headers />
      <main className='flex-grow pt-10 [@media(min-width:1200px)]:pt-[70px]'>
        <Outlet />
      </main>

    </div>
  )
};

export default RootLayouts;
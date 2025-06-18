import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './headers';
import Footer from './footer';
import ScrollToTop from '../ui/ScrollToTop';

const RootLayouts = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Headers />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
};

export default RootLayouts;
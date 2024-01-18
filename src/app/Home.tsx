"use client"
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='h-screen flex items-center justify-center text-custom-purple font-sans m-0 p-0 '>
        <div className='z-10 relative left-64'>
        <div className='font-extrabold text-5xl text-center space-x-0 '>
            <span>Building Better Products</span>
           <span> Shouldn't Take Forever</span>
      <div className="text-base font-thin text-center">
      We help companies innovate faster and build better products,<br />using real user data and rapid iterations.
      </div>
      </div>
      </div>
      <div className='z-0'>
      <img src="/target1.png" alt="Target Image" className='w-4/5 h-3/4 relative left-24' />
      </div>
      </div>
      
    
    </>
  )
}

export default Home;

import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-900'>Hi,My Name is </p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Ronit Adhikari</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>   I am a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[600px]'>I am a full stackdeveloper specializing in building Reponsive website and Web 
          application Using MERN stack.Currently, i am focusing in providing a best facilities
          to my client.
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-600 hover:border-slate-600 rounded-lg'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            < HiArrowNarrowRight className='mx-2 '/>
            </span>
            </button>

            
          </div>
           
        </p>

      </div>
    </div> 
  )
}

export default Home
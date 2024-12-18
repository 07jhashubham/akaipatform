
import Navbar from '../../components/Navbar'
import React from 'react'

const Hero = () => {
  return (
    <main className='w-full lg:h-[90vh] -z-10 
    bg-[linear-gradient(to_right,_rgb(0,0,0,0.2)_1px,_transparent_1px)] bg-[size:20px_100%]'>
      <div className='w-full lg:flex lg:items-center lg:justify-evenly pt-10 px-6 pl-8 lg:pt-20 lg:px-20 lg:pr-32' >
        <div className=' w-full lg:w-[60%]' >
          <p className='font-rexlia text-3xl lg:text-6xl' >AI Needs Reliable Data.</p>
          <p className='font-rexlia text-3xl lg:text-6xl' >We Deliver.</p>
          <p className='font-rexlia text-xl mt-6 ' >API-driven, high-quality labeled data for the future of AI innovation.</p>
          <div className=' flex flex-col lg:flex-row lg:items-center gap-4 mt-10' >
            <button className=" ">
              <img src='/btns/learn.png' alt="Get Started" className="lg:w-48 lg:h-12 w-32" />
            </button>
            <button className=" ">
              <img src='/btns/get.png' alt="Get Started" className="lg:w-48 lg:h-12 w-32" />
            </button>
          </div>
        </div>
        <img src="/hero.png" className='lg:w-[40%] py-10 mx-auto' />
      </div>
    </main>
  )
}

export default Hero
import React from 'react'

const Form = () => {
  return (
    <div className='w-full h-[44rem] relative border-b-[12px] border-gray-400'>
      <img src="/form-triangle.png" className='absolute inset-0 size-20 top-0' alt="" />
      <img src="/bg/form-bg.png" className='absolute -z-10 w-full hidden lg:block h-[28rem] bottom-0' alt="" />
      <img src="/bg/res-form-bg.png" alt="" className='w-full lg:hidden absolute -z-10' />
      <p className='font-rexlia pl-10 pt-20 text-5xl lg:pl-32 lg:pt-32'>
        Join the AI Revolution Today
      </p>
      <form className='flex flex-col lg:flex-row justify-center gap-10 px-10 lg:px-0 lg:gap-20 mt-10 lg:mt-[12rem]'>
        <div className='flex-col flex gap-1'>
          <label htmlFor="email">Email</label>
          <input className='px-3 bg-white py-1 border border-black lg:w-[32rem]' type="text" placeholder='Enter your email' />
          <p className='text-xs font-helvetica-medium text-gray-400 mt-1'>We respect your privacy</p>
        </div>
        <div className='flex-col flex gap-1 '>
          <label htmlFor="password">Password</label>
          <input className='px-3 py-1 bg-white border border-black lg:w-[32rem]' type="password" placeholder='Choose a Secure Password' />
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <button className='' >
          <img src='/btns/submit.png' alt="Submit-form" className="w-32 h-14" />
        </button>
      </div>

    </div>
  )
}

export default Form
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t-[3rem]  border-t-prime w-full'>
            <div className='lg:flex justify-around lg:px-4 mt-16 relative'>
                <img src="/footer-dot.png" alt="" className='lg:w-[15%] hidden lg:block lg:h-[10%]' />
                <img src="/res-footer-dot.png" className='lg:hidden ml-20 absolute -left-12 -top-16' alt="" />
                <div className='pt-5 w-full lg:w-[65%]'>
                    <p className=' pl-28 lg:pl-0 lg:px-0 font-rexlia w-full lg:w-auto text-4xl lg:text-5xl '>MOVE TO THE ULTIMATE SPACE</p>
                    <hr className='bg-black h-[2px] lg:ml-36 mt-12 lg:mt-2 ml-auto w-[70%] lg:w-[70%] ' />
                    <img src="/footer-x.png" className='lg:w-20 w-24 mt-5 right-10 lg:right-20 absolute lg:static lg:ml-[47rem]' alt="" />
                </div>
            </div>
            <div className='flex items-center mt-14 px-4 gap-8 lg:gap-14 lg:ml-32'>
                <img src="/socials/X.svg" alt="X logo" />
                <img src="/socials/Telegram.svg" alt="Telegram logo" />
                <img src="/socials/Discord.svg" alt="Discord logo" />
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center py-4 lg:py-2 gap-6 bg-gray-300 lg:gap-10 mt-20'>
                <div className='font-helvetica-medium text-xl lg:text-base'>About Us</div>
                <div className='font-helvetica-medium text-xl lg:text-base'>Contact</div>
                <div className='font-helvetica-medium text-xl lg:text-base'>Privacy Policy</div>
                <div className='font-helvetica-medium text-xl lg:text-base'>Social Media</div>
            </div>
            <p className='text-center font-helvetica-medium lg:py-1 py-3 text-xl lg:text-base'>&copy; 2024 Akai Space. All Rights Reserved</p>
        </div>
    )
}

export default Footer
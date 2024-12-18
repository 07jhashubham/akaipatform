import React from 'react'

const AppItem = ({ img, title, desc }: {
    img: string,
    title: string,
    desc: string
}) => {
    return (
        <div className='w-60'>
            <img src={img} alt="" className='w-14 mx-auto mb-10' />
            <p className='font-rexlia text-xl text-center mb-3'>
                {title}
            </p>
            <p className='font-rexlia text-base text-center text-gray-400 mb-3'>
                {desc}
            </p>
        </div>
    )
}

export default AppItem
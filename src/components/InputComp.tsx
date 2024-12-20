'use client'
import { FC } from 'react'

interface InputCompProps {
    setSelectedEmail: (value: string) => void;
    setSelectedPassword: (value: string) => void;
    emailValue:string,
    passwordValue:string
}

const InputComp: FC<InputCompProps> = ({ setSelectedEmail, setSelectedPassword,emailValue,passwordValue }) => {

    return (
        <div className='w-full'>
            <p className="font-helvetica-medium text-center text-sm my-3">
                Enter Your Name and Password
            </p>
            <form action="">
                <div className='flex flex-col gap-2 mb-2 '>
                    <label className='font-rexlia text-sm justify-center ' htmlFor="name">Name</label>
                    <input value={emailValue} onChange={(e) => (setSelectedEmail(e.target.value))} className='px-4 py-2 bg-white border border-black shadow-[2px_2px_0px_0px_rgba(207,11,33,1)]'
                        type="text" placeholder='Your Name' />
                </div>
                <div className='flex flex-col gap-2  '>
                    <label className='font-rexlia text-sm justify-center ' htmlFor="name">Password</label>
                    <input value={passwordValue} onChange={(e) => (setSelectedPassword(e.target.value))} className='px-4 py-2 bg-white border border-black shadow-[2px_2px_0px_0px_rgba(207,11,33,1)]'
                        type="password" placeholder='Your Password' />
                </div>
            </form>
        </div>
    )
}

export default InputComp
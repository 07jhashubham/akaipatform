'use client'
import Link from 'next/link'
import { FC, useState } from 'react'
import CustomBtn from './ui/CustomBtn'

interface LoginFormProps {

}

const LoginForm: FC<LoginFormProps> = ({ }) => {
    const [formData, setformData] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(formData.email);
    console.log(formData.password);
    
    return (
        <div className='flex flex-col gap-6 items-center justify-center p-6 w-[25rem] border border-black
     bg-white shadow-[4px_4px_0px_0px_rgba(204,11,33,1)]'>
            <img src='/logo.png' className='w-52' />
            <p className='text-prime font-rexlia text-xl' >Log In</p>
            <input onChange={handleChange} value={formData.email} name='email' type="text" className='px-4 py-2 w-full bg-inputBg border border-black focus:border-transparent focus:ring-2 focus:ring-inset focus:ring-prime' placeholder='Email ID or Username' />
            <div className='w-full flex flex-col items-end'>
                <input onChange={handleChange} value={formData.password} name='password' type="password" className='px-4 py-2 mb-2 w-full bg-inputBg border border-black focus:border-transparent focus:ring-2 focus:ring-inset focus:ring-prime' placeholder='Password' />
                <Link href='#' className='text-blue-500 underline hover:opacity-85'>
                    <span className=''>Forgot Password?</span>
                </Link>
            </div>
            <div className="flex justify-center">
                <button className='' >
                    <img src='/btns/submit.png' alt="Submit-form" className="h-12" />
                </button>
            </div>
            <div className='flex items-center gap-2'>
                <p>Don't have an account?</p>
                <Link href='/auth/register' className='text-blue-500 underline hover:opacity-85'>
                    <span>Register</span>
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
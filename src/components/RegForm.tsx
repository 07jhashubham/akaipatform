import { FC,  } from 'react'
import CustomBtn from './ui/CustomBtn';
import Link from 'next/link';

interface RegFormProps {

}

const RegForm: FC<RegFormProps> = ({ }) => {

    return (
        <div className='w-full flex flex-col items-center'>
            <img src='/logo.png' className='w-52' />
            <div className='flex mt-20 flex-col px-10 gap-6 items-center justify-center p-6 w-[25rem] border border-black
    bg-white shadow-[4px_4px_0px_0px_rgba(204,11,33,1)]'>
                <p className='text-prime pt-8 font-rexlia text-xl' >Register</p>
                <p className=' font-rexlia text-lg' >You are registering for</p>
                <Link href="/auth/register/individual">
                    <CustomBtn variant="big" >
                        Individual
                    </CustomBtn>
                </Link>
                <Link href="/auth/register/company">
                    <CustomBtn variant="big" >
                        Company
                    </CustomBtn>
                </Link>
                <div className='flex items-center gap-2'>
                    <p>Already have an account?</p>
                    <Link href='/auth/login' className='text-blue-500 underline hover:opacity-85'>
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegForm
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react'

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className='w-80 px-4 border-r border-r-gray-400'>
            <img src='/label/btn/label.png' alt="Label input" className="h-12 mx-auto w-20 lg:w-72 my-7 mb-14" />
            <div className='flex-col flex  items-center'>
                {pathname === "/label-data/input" ? (
                    <>
                        <img src='/label/btn/input-active.png' alt="Label input" className="cursor-pointer mx-auto h-12 mb-4 lg:w-72" />
                        <Link href="/label-data/report" className='font-rexlia text-center text-base py-2 px-3 w-[97%] bg-inputBg'>
                            Detailed Report
                        </Link>
                    </>
                ) : (
                    <>

                        <Link href="/label-data/input" className='font-rexlia text-center text-base mb-4 py-2 px-3 w-[97%] bg-inputBg'>
                            Data Input
                        </Link>
                        <img src='/label/btn/report-active.png' alt="Label input" className="cursor-pointer mx-auto h-12 mb-4 lg:w-72" />
                    </>
                )}

            </div>
        </div>
    )
}

export default Sidebar
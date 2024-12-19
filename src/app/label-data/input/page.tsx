import DataForm from '@/components/DataForm'
import Sidebar from '@/components/Sidebar'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='w-full flex'>
            <Sidebar />
            <div>
                <p className='font-rexlia lg:mt-5 lg:ml-10 lg:text-4xl'>Data Input</p>
                <img src="/borders/comp-top-1.png" className='w-full h-16' alt="border-image-1" />
                <DataForm />
            </div>
        </div>
    )
}

export default page
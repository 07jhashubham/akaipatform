import Notification from '@/components/Notification'
import Sidebar from '@/components/Sidebar'
import Telemetry from '@/components/Telemetry'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <div className='w-full min-h-screen flex' >
            <Sidebar />
            <div className=''>
                <p className='font-rexlia lg:mt-5 lg:ml-10 lg:text-4xl'>Detailed Report (QA)</p>
                <img src="/borders/comp-top-1.png" className='w-full h-16' alt="border-image-1" />
                <Telemetry />
                <Notification />
            </div>
        </div>
    )
}

export default page
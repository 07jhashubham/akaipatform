import { FC } from 'react'
import NotificationBox from './NotificationBox'

interface NotificationProps {

}

const Notification: FC<NotificationProps> = ({ }) => {
    return (
        <div className='px-4'>
            <p className='border-4 w-fit border-prime px-3 py-2 font-rexlia my-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] lg:text-xl'>Notifications</p>
            <NotificationBox />
            <NotificationBox />
        </div>
    )
}

export default Notification
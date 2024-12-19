import { FC } from 'react'

interface NotificationBoxProps {
  days?:number
  text?:string
}

const NotificationBox: FC<NotificationBoxProps> = ({days,text}) => {
  return (
    <div className='w-full border border-black pt-1 pb-2 mb-4 px-4'>
    <span className='font-helvetica-medium text-xs text-gray-500'>{days??2} days ago</span>
    <div className='text-xl font-helvetica-medium'>{text??"Any Notification"}</div>
    </div>
  )
}

export default NotificationBox
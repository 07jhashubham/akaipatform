import RegForm from '@/components/RegForm'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center -z-10
bg-[linear-gradient(to_right,_rgba(0,0,0,0.2)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(0,0,0,0.2)_1px,_transparent_1px)] bg-[size:20px_20px]'>
      <RegForm />
    </div>
  )
}

export default page
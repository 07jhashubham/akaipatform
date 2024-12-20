import { FC } from 'react'

interface WebsiteCompProps {
    setWebsite: (value: string) => void;
    websiteValue: string;
}

const WebsiteComp: FC<WebsiteCompProps> = ({ setWebsite,websiteValue }) => {
    return (
        <div className='w-full'>
            <p className="font-helvetica-medium text-center text-sm my-3">
                Enter Your Company&apos; Website
            </p>
            <div className='flex flex-col gap-2 mb-2 '>
                <label className='font-rexlia text-sm justify-center ' htmlFor="size">Company Website</label>
                <input value={websiteValue} onChange={(e) => (setWebsite(e.target.value))} className='px-4 py-2 bg-white border border-black shadow-[2px_2px_0px_0px_rgba(207,11,33,1)]'
                    type="text" placeholder='Your Company Website' />
            </div>
        </div>
    )
}

export default WebsiteComp
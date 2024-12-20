import { FC } from 'react'

interface NameCompProps {
    setName: (value: string) => void;
    nameValue: string;
}

const NameComp: FC<NameCompProps> = ({ setName, nameValue }) => {
    return (
        <div className='w-full'>
            <p className="font-helvetica-medium text-center text-sm my-3">
                Enter Your Company Name
            </p>
            <div className='flex flex-col gap-2 mb-2 '>
                <label className='font-rexlia text-sm justify-center ' htmlFor="CompName">Company Name</label>
                <input value={nameValue} onChange={(e) => (setName(e.target.value))} className='px-4 py-2 bg-white border border-black shadow-[2px_2px_0px_0px_rgba(207,11,33,1)]'
                    type="text" placeholder='Your Company Name' />
            </div>
        </div>
    )
}

export default NameComp
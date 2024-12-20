import { FC } from 'react'

interface SizeCompProps {
    setSize: (value: string) => void;
    sizeValue: string;
}

const SizeComp: FC<SizeCompProps> = ({ setSize,sizeValue }) => {
    return (
        <div className='w-full'>
            <p className="font-helvetica-medium text-center text-sm my-3">
                Enter Your Company Size
            </p>
            <div className='flex flex-col gap-2 mb-2 '>
                <label className='font-rexlia text-sm justify-center ' htmlFor="size">Company Size</label>
                <input value={sizeValue} onChange={(e) => (setSize(e.target.value))} className='px-4 py-2 bg-white border border-black shadow-[2px_2px_0px_0px_rgba(207,11,33,1)]'
                    type="text" placeholder='Your Company Size' />
            </div>
        </div>
    )
}

export default SizeComp
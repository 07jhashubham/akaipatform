import { FC } from 'react'
import { CustomSelect, CustomSelectContent, CustomSelectGroup, CustomSelectItem, CustomSelectTrigger, CustomSelectValue } from './ui/CustomSelect';

interface ContactCompProps {
    selectedCode: string;
    numberValue: number;
    setSelectedCode: (value: string) => void;
    setNumber: (value: number) => void;
}

const ContactComp: FC<ContactCompProps> = ({ selectedCode, setNumber, setSelectedCode,numberValue }) => {
    return (
        <div className='w-full'>
            <p className="font-helvetica-medium text-center text-sm my-3">
                Enter Mobile Number
            </p>
            <div className='flex items-center h-10 justify-center w-full mx-auto'>
                <CustomSelect value={selectedCode} onValueChange={(value) => setSelectedCode(value)} >
                    <CustomSelectTrigger className='w-20 h-10 py-4'>
                        <CustomSelectValue defaultChecked defaultValue={"+91"} />
                    </CustomSelectTrigger>
                    <CustomSelectContent>
                        <CustomSelectGroup>
                            <CustomSelectItem value={"+91"}>
                                +91
                            </CustomSelectItem>
                            <CustomSelectItem value="+1">
                                +1
                            </CustomSelectItem>
                            <CustomSelectItem value="+92">
                                +92
                            </CustomSelectItem>
                        </CustomSelectGroup>
                    </CustomSelectContent>
                </CustomSelect>
                <input value={numberValue} onChange={(e) => (setNumber(e.target.value))} className='px-4 h-10 py-2 bg-white border border-black shadow-[2px_2px_0px_0px_rgba(207,11,33,1)]'
                    type="number" placeholder='Mob Number' />
            </div>

        </div>
    )
}

export default ContactComp
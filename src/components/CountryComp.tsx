import { FC } from 'react';
import { CustomSelect, CustomSelectContent, CustomSelectGroup, CustomSelectItem, CustomSelectTrigger, CustomSelectValue } from './ui/CustomSelect';

interface CountryCompProps {
    selectedCountry: string; // Array of selected interests
    setselectedCountry: (value: string) => void;
}

const CountryComp: FC<CountryCompProps> = ({ selectedCountry, setselectedCountry }) => {
    return (
        <div className='w-full mt-10'>
        <p className="font-helvetica-medium text-center text-sm my-3">
        Select Country
      </p>
            <CustomSelect value={selectedCountry} onValueChange={(value) => setselectedCountry(value)} >
                <CustomSelectTrigger >
                    <CustomSelectValue placeholder="Select Country" />
                </CustomSelectTrigger>
                <CustomSelectContent>
                    <CustomSelectGroup>
                        <CustomSelectItem value="India">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="30" height="20">
                                    <rect width="640" height="160" fill="#ff9933" />
                                    <rect y="160" width="640" height="160" fill="#ffffff" />
                                    <rect y="320" width="640" height="160" fill="#138808" />
                                </svg>
                                India
                            </div>
                        </CustomSelectItem>
                        <CustomSelectItem value="UK">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="30" height="20">
                                    <rect width="640" height="480" fill="#00247d" />
                                    <rect width="640" height="160" y="160" fill="#fff" />
                                    <rect width="640" height="160" y="320" fill="#cf142b" />
                                </svg>
                                United Kingdom
                            </div>
                        </CustomSelectItem>
                        <CustomSelectItem value="Russia">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="30" height="20">
                                    <rect width="640" height="480" fill="#d52b1e" />
                                    <rect y="160" width="640" height="160" fill="#fff" />
                                    <rect y="320" width="640" height="160" fill="#6cace4" />
                                </svg>
                                Russia
                            </div>
                        </CustomSelectItem>
                    </CustomSelectGroup>
                </CustomSelectContent>
            </CustomSelect>
        </div>
    );
};

export default CountryComp;

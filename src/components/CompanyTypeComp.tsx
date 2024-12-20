import { FC } from 'react'
import { CustomSelect, CustomSelectContent, CustomSelectGroup, CustomSelectItem, CustomSelectTrigger, CustomSelectValue } from './ui/CustomSelect';
interface CompanyTypeCompProps {
    setselectedCompanyType: (value: string) => void;
    selectedType: string; 
}

const CompanyTypeComp: FC<CompanyTypeCompProps> = ({ setselectedCompanyType,selectedType }) => {
    return (
        <div className='w-full'>
            <p className="font-helvetica-medium text-center text-sm my-3">
                Select Comapny Type
            </p>
            <CustomSelect value={selectedType} onValueChange={(value) => setselectedCompanyType(value)} >
                <CustomSelectTrigger>
                    <CustomSelectValue placeholder="Select Comapny Type" />
                </CustomSelectTrigger>
                <CustomSelectContent>
                    <CustomSelectGroup>
                        <CustomSelectItem value="Product-based">
                          Product-based
                        </CustomSelectItem>
                        <CustomSelectItem value="Service-based">
                          Service-based
                        </CustomSelectItem>
                        <CustomSelectItem value="PaaS">
                           PaaS
                        </CustomSelectItem>
                        <CustomSelectItem value="SaaS">
                           SaaS
                        </CustomSelectItem>
                    </CustomSelectGroup>
                </CustomSelectContent>
            </CustomSelect>
        </div>
    )
}

export default CompanyTypeComp
'use client'
import { FC, useState } from 'react'
import InterestComp from './InterestComp';
import CountryComp from './CountryComp';
import NameComp from './NameComp';
import WebsiteComp from './WebsiteComp';
import CompanyTypeComp from './CompanyTypeComp';
import InputComp from './InputComp';
import SizeComp from './SizeComp';
import ContactComp from './ContactComp';

interface CompanyFormProps {

}

const CompanyForm: FC<CompanyFormProps> = ({ }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        interested: [],
        country: "",
        companyName: "",
        companyWebsite: "",
        companyType: "",
        email: "",
        password: "",
        companySize: "",
        number: null,
        countryCode: "",
    });

    const steps = [
        <InterestComp
            selectedInterest={formData.interested}
            setselectedInterest={(value: string[]) => {
                setFormData({ ...formData, interested: value })
            }
            }
        />,
        <NameComp nameValue={formData.companyName} setName={(value) => setFormData({ ...formData, companyName: value })} />,
        <CountryComp selectedCountry={formData.country} setselectedCountry={(value) => (setFormData({ ...formData, country: value }))} />,
        <WebsiteComp websiteValue={formData.companyWebsite} setWebsite={(value) => setFormData({ ...formData, companyWebsite: value })} />,
        <CompanyTypeComp selectedType={formData.companyType} setselectedCompanyType={(value) => setFormData({ ...formData, companyType: value })} />,
        <SizeComp sizeValue={formData.companySize} setSize={(value) => setFormData({ ...formData, companySize: value })} />,
        <ContactComp numberValue={formData.number} selectedCode={formData.countryCode} setSelectedCode={(value) => setFormData({ ...formData, countryCode: value })}
            setNumber={(value) => setFormData({ ...formData, number: value })} />,
        <InputComp emailValue={formData.email} passwordValue={formData.password} setSelectedEmail={(value) => setFormData({ ...formData, email: value })}
            setSelectedPassword={(value) => setFormData({ ...formData, password: value })} />,
    ]

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        } else {
            console.log("Form Submitted", formData);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    console.log(formData.interested + formData.country + formData.email+ formData.password + formData.companyName +
        formData.companyWebsite + formData.companyType + formData.companySize + formData.number + formData.countryCode);
    

    return (
        <div className='w-full flex flex-col items-center'>
            <img src='/logo.png' className='w-60' />
            <div className='flex mt-10 h-[27rem] flex-col py-2 items-center  px-6 w-[30rem] border border-black
                        bg-white shadow-[4px_4px_0px_0px_rgba(204,11,33,1)]'>
                <p className='text-prime pb-4 font-rexlia text-xl' >Register</p>
                <p className=' font-rexlia pb-1 text-lg' >You are registering for</p>
                <p className='text-prime  font-rexlia text-lg' >Company</p>
                {steps[currentStep]}
                <div className='w-full flex items-center my-4 justify-around'>
                    <button onClick={() => handlePrev()} disabled={currentStep === 0} className='bg-white font-helvetica-medium px-6 py-1 text-sm border
                 border-black shadow-[2px_2px_0px_0px_rgba(217,217,217,1)] disabled:bg-gray-400 disabled:cursor-not-allowed'>
                        Back
                    </button>
                    <button onClick={() => handleNext()} disabled={currentStep === steps.length - 1} className='bg-white font-helvetica-medium px-6 py-1 text-sm border
                 border-black shadow-[2px_2px_0px_0px_rgba(204,11,33,1)] disabled:bg-gray-400 disabled:cursor-not-allowed'>
                        Next
                    </button>
                </div>
                {currentStep === steps.length - 1 && formData.interested && formData.country && formData.email && formData.password && formData.companyName &&
                    formData.companyWebsite && formData.companyType && formData.companySize && formData.number && formData.countryCode && (
                        <button className='' >
                            <img src='/btns/submit.png' alt="Submit-form" className="h-12" />
                        </button>
                    )}

            </div>
        </div>
    )
}

export default CompanyForm
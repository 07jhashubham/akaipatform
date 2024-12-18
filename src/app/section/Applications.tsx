import AppItem from "../../components/AppItem";

const Applications = () => {
    return (
        <section className='w-full mx-auto border-t-[12px] border-t-prime border-l-[12px] border-l-prime
     border-r-[12px] border-r-gray-400 border-b-[12px] border-b-gray-400 p-4  shadow-black '>
            <div className='flex items-center w-full mx-auto py-10 pt-12 justify-evenly relative'>
                {/* Wrapping the image in a relative container */}
                <div className='relative lg:w-[40rem]'>
                    <img src="/textBox.png" alt="" className='w-full h-52 lg:h-auto' />
                    {/* Adding the text inside the relative container */}
                    <div className='absolute inset-2 -top-8 lg:-left-8 -left-2 flex flex-col items-center justify-center text-center p-4'>
                        <p className='font-rexlia text-3xl text-white mb-4'>
                            Industry-Specific Applications
                        </p>
                        <p className='font-rexlia text-base text-white'>
                            Explore how labeled data impacts various industries.
                        </p>
                    </div>
                </div>
                <img src="/industry/alien.png" alt="" className='w-40 hidden lg:block' />
            </div>
            <div className='flex flex-col lg:flex-row items-center mx-auto pt-16 pb-10 w-full justify-evenly '>
                <AppItem img="/industry/medic.png" title={"Healthcare"} desc={"Patient monitoring, medical analysis"} />
                <AppItem img="/industry/ai.png" title={"Generative AI"} desc={"Synthetic data, enhancing existing datasets"}  />
                <AppItem img="/industry/car.png" title={"Autonomous Vehicles"} desc={"Object detection, behavior analysis"}  />
                <AppItem img="/industry/cart.png" title={"Retail"} desc={"Customer behavior, queue analysis"}  />
            </div>
        </section>
    );
};

export default Applications;
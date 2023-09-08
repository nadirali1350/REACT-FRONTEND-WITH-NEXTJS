import Header from '@/Components/Header'

const SectionOne = () => {
    return (
        <div className="flex flex-col justify-start items-center w-[95%] mt-[50px] bg-gradient-to-b from-[#0D1C2E] to-gray-950 rounded-[80px]">
            <div className="SECTION1 w-[90%]">
                    
                    <Header />
                    <div class="flex flex-col sm:flex-row justify-around">
                    <div class="w-[50%]">
                        <h1 style={{fontFamily:'Blimone'}} class="font-sans w-[min-content] text-white text-[170px] font-bold leading-[170px] max-lg:text-[70px] max-lg:leading-[70px]">Darcy's insurance products</h1>
                    </div>
                    <div class="flex justify-around w-full md:w-[25%]">
                        <div class="text-white flex flex-row sm:block w-full mt-[50px] md:ml-[70px] md:m-[40px]" style={{fontFamily: 'Poppins'}}>
                            <img class="my-[20px] w-[40px] h-[40px] max-sm:h-[20px] max-sm:w-[20px]" src="./white.png" alt=""/>
                            <p class="my-[20px] ml-[15px] md:mx-[0px] leading-[137%] text-[14px] font-semibold">Our plans are saving policyholders 30% - 60% on premiums</p>
                            <img class="my-[20px] w-[40px] h-[40px] max-sm:h-[20px] max-sm:w-[20px]" src="./white.png" alt=""/>
                            <p class="my-[20px] ml-[15px] md:mx-[0px] leading-[137%] text-[14px] font-semibold">We offer a choice of low dedactibles and include no cost value-added services</p>
                            <img class="w-[55px] h-[130px]" src="./Rectangle2.png" alt=""/>
                        </div>
                    </div>
                    <div class="mt-[-19px] hidden md:block mr-[-45px] w-[25%]">
                        <img class="" src="./Rectangle.png" alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionOne
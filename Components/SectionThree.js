import Slider from "./Slider";

const SectionThree = () => {
    
    return(
        <>
            <div className="flex flex-col justify-start items-center w-[100%] md:w-[95%] m-[50px]">
            <div className=" w-[90%] text-white p-[20px]">
                <div className="flex flex-col-reverse md:grid md:grid-cols-3">
                    <div className="col-span-2 h-[500px] rounded-[57px] bg-slate-900">
                        <Slider />
                    </div>
                    <div className="h-full flex justify-center items-center m-5">
                        <div className="h-[40px] w-[40px] mr-[8px] bg-cover bg-center" style={{backgroundImage: `url(./white.png)`}}></div>
                        <div>
                            <h1 className="text-[50px] font-bold w-[180px] leading-[50px]">
                                Our experts say
                            </h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
        )
}

export default SectionThree
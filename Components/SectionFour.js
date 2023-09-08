

const SectionFour = () => {
    return(
        <>
        <div className="flex flex-col justify-start items-center w-[95%] md:w-[85%] m-[50px]">
            <div className=" w-[90%] text-white p-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex justify-center md:justify-start font-bold items-center">
                        <h1 style={{fontFamily:'Blimone'}} className="text-[85px]">Support
                        <br />
                        at every
                        <br />
                        <span className="text-[164px]">step</span></h1>
                    </div>
                    <div className="md:w-[361px] leading-[133%] flex flex-col md:pl-[40px] items-center  justify-center">
                            <img class="my-[0px] w-[40px] h-[40px]" src="./white.png" alt=""/>
                            <p class="my-[20px] mx-[20px] md:mx-[0px] text-[14px] font-normal">Participate in the loyalty program. Pay for the service online to get bonuses for our other services. We have a lot of bonuses!</p>
                            <img class="mt-[30px] w-[40px] h-[40px]" src="./white.png" alt=""/>
                            <p class="my-[20px] mx-[20px] md:mx-[0px] text-[14px] font-normal">You can help other people: choose a donation fund and share the link with your friends!</p>
                            <a className="p-[20px] mt-[10px] rounded-[130px] md:w-full font-semibold text-red-400 text-[21px] border-solid text-center border-[5px] border-red-400" href="">Choose a fund</a>
                    </div>
                    <div className="hidden md:flex justify-end items-center">
                        <div className=" h-[565px] rounded-[340px] w-[300px] bg-cover bg-[-120px]" style={{backgroundImage:'url("./happy.jpeg")'}}></div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
        )
}


export default SectionFour
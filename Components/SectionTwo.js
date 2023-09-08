
import image from '../public/1st1.jpeg';

const SectionTwo = () => {
    const thisis = image.src

    return(
        <>
            <div class="flex flex-col justify-start items-center w-[95%] md:w-[85%] m-[50px]">
            <div class="w-[90%] text-white p-[20px]">
                <div class="grid grid-cols-3 md:grid-cols-6 gap-[30px] md:gap-[30px] h-[400px] max-sm:h-fit mb-[25px]">
                    <div style={{backgroundImage:'url("./1st1.jpeg")'}} class="col-span-3 rounded-[57px] flex items-end p-[20px] bg-center bg-cover" > <a href="" class="bg-black rounded-[50px] px-[26px] py-[25px] text-white font-bold">Home insurance</a></div>
                    <div class="col-span-1 rounded-[180px] bg-center bg-cover" style={{backgroundImage:'url("./1st2.jpeg")'}}></div>
                    <div class="bg-[#0D1D30] rounded-[57px] col-span-2 flex flex-col items-center justify-between p-[20px] md:p-[50px]">
                        <div>
                            <h1 style={{fontFamily:'Blimone'}} class="text-[77px] md:text-[40px] mt-[-5] font-bold">Best choice</h1>
                        <p className='mt-5 font-semibold leading-[126%]'>Not all insurance are the same. That's why agency knows that your insurance should be customized to fit your situation.</p>
                        </div>
                        <div className='w-full'>
                            <a href="" class="bg-red-400 rounded-[50px] block w-[100%] text-center py-[22px] text-[13px] md:text-[19px] text-black font-bold">View all services</a></div>
                        </div>
                        
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 h-[254px] gap-[30px] md:gap-[30px]">
                    <div class="p-[20px] flex items-end rounded-[57px] bg-center bg-cover" style={{backgroundImage:'url("./2nd1.jpeg")'}}><a href="#" class=" bg-gray-950 rounded-[50px] px-[26px] py-[25px] text-white font-bold">Vehicle damage</a></div>
                    <div class="p-[20px] flex items-end rounded-[57px] bg-center bg-cover" style={{backgroundImage:'url("./2nd2.jpeg")'}}><a href="" class=" bg-gray-950 rounded-[105px] px-[26px] py-[25px] text-white font-bold">Mortgage insurance</a></div>
                    <div class="p-[20px] flex items-end rounded-[57px] bg-center bg-cover" style={{backgroundImage:'url("./2nd3.jpeg")'}}><a href="" class=" bg-gray-950 rounded-[105px] px-[26px] py-[25px] text-white font-bold">Medical expenses</a></div>
                </div>
            </div>

        </div>
                
        </>
        )
}

export default SectionTwo
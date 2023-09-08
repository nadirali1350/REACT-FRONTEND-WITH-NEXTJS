'use client';
import { useState } from 'react';

const DropdownMenu = () => {
    return (
        <>
        <div className='fixed  text-[20px]'>
            <ul className='px-[10px] py-3 bg-black/70 rounded-[10px] cursor-default'>
                <a href=""><li className=' rounded bg-white/20 px-9 py-1'>Menu</li></a>
                <a href=""><li className=' rounded mt-3 bg-white/20 px-9 py-1'>Menu</li></a>
                <a href=""><li className=' rounded mt-3 bg-white/20 px-9 py-1'>Menu</li></a>
            </ul>
        </div>
        </>
    )

}



const Header = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
    setDropdownVisible(true);}
    const handleMouseLeave = () => {
    setDropdownVisible(false);
    }
    return (
        <>
            <div className="text-[8px] flex justify-between items-center mx-[5px] my-[50px] text-white ">
                    <div>
                        <img className='max-w-fit animate-spin duration-500' src={"./Subtract.png"} alt="LOGO"></img>
                    </div>
                    <div className=" flex items-center font-semibold max-lg:hidden">
                        <h1 className="m-[20px] flex">Home</h1>
                        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><h1 className="m-[20px] flex">Services <img className="w-[100%] h-[100%] pt-[7px] pl-2" src="./service.png" alt=""></img> </h1>{isDropdownVisible && <DropdownMenu />}</button>
                        <h1 className="m-[20px]">About us</h1>
                        <h1 className="m-[20px]">Blog</h1>
                        <h1 className="m-[20px]">Career</h1>
                    </div>
                    <div className="flex items-center">
                        <a href=""><h1 className="m-[20px] w-max bg-sky-300 rounded-[50px] px-[35px] py-[14px] text-black font-bold inline-flex">Contact us</h1></a>
                        <a href=""><h1 className="sm:m-[20px] font-bold flex"><img className="h-[90%] mt-[0px] mr-[10px]" src="./Union.png" alt=""></img> Login</h1></a>
                    </div>
                </div>
        </>
    )
}
export default Header
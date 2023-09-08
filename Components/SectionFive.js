import Calculator from "./Calculator"
import Link from "next/link"
import Footer from "./Footer"

const SectionFive = () => {
    return(
        <>
            <div className="flex flex-col justify-start items-center w-[95%] md:w-[85%] m-[50px] bg-gradient-to-b to-slate-900 from-gray-950 rounded-[80px]">
                <div className=" w-[90%] text-white p-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <h1 className=" text-[40px] mb-3">
                                Need numbers?
                            </h1>
                            <Calculator />
                        </div>
                        <div className="flex flex-col mt-10 md:mt-[-40px] md:pl-40 md:w-[90%]">
                            <div>
                                <h1 className="text-xl mb-5 font-semibold">Insurance services</h1>
                                <div className="flex flex-wrap mt-3">
                                    <Link className="mr-4 mb-4 font-normal" href="/">Medical expenses</Link>
                                    <Link className="mr-4 mb-4 font-normal" href="/">Family health insurance</Link>
                                    <Link className="mr-4 mb-4 font-normal" href="/">Vehicle damage</Link>
                                    <Link className="mr-4 mb-4 font-normal" href="/">Property loss Fire</Link>
                                </div>
                            </div>
                            <div className="mt-[40px]" >
                                <h1 className="text-xl mb-5 font-semibold">Company</h1>
                                <div className="flex flex-wrap mt-3">
                                    <Link className="mr-4 mb-4 font-normal" href="/">About us</Link>
                                    <Link className="mr-4 mb-4 font-normal" href="/">Career</Link>
                                    <Link className="mr-4 mb-4 font-normal" href="/">Help</Link>
                                    <Link className="mr-4 mb-4 font-normal" href="/">FAQ</Link>
                                    <Link className="mr-4 mb-4 font-normal" href="/">Blog</Link>
                                </div>
                            </div>
                            <div className="mt-[40px]" >
                                <h1 className="text-xl mb-5 font-semibold">Bonus</h1>
                                <div className="flex flex-wrap mt-3">
                                    <Link className="mr-3 mb-2" href="/">Gift certificate</Link>
                                    <Link className="mr-3 mb-2" href="/">Affiliate Program</Link>
                                    <Link className="mr-3 mb-2" href="/">Trainings</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            
        </>
        )
}


export default SectionFive
import { BsChevronCompactLeft , BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'

const Slider = () => {
    const slides = [
        {
            id: 1,
            image: './actor.png',
            name: 'Georgia Darcy',
            description: 'With over twenty years of industry experience, Darcy s insurance products has learned a lot. The one thing we know for sure is that were all about you. If you find searching for insurance frustrating we are here to help',
            role: 'The agency founder',
        },
        {
            id: 2,
            image: './1st2.jpeg',
            name: 'Darcy',
            description: 'Second slide',
            role: 'The agency founder',
            
        },
        {
            id: 3,
            image: './2nd1.jpeg',
            name: 'Georgia',
            description: 'Write something here',
            role: 'The agency founder',
        },
        {
            id: 4,
            image: './2nd1.jpeg',
            name: 'Georgia',
            description: 'Write something here',
            role: 'The agency founder',
        },
        {
            id: 5,
            image: './2nd1.jpeg',
            name: 'Georgia',
            description: 'Write something here',
            role: 'The agency founder',
        }
    
    ]
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    return(
        <>
            <div className='group relative flex justify-center items-center h-full'>
                <div className="grid grid-cols-3 h-full w-full">
                                
                                <div className="flex items-center justify-center h-full">
                                    <div className="ml-[10px] md:ml-[70px] rounded-[753px] h-[417px] bg-cover bg-center w-full" style={{backgroundImage:`url(${slides[current].image})`}}></div>
                                </div>
                                <div className="col-span-2 my-[70px] mx-[10px] md:m-[70px]">
                                    <h1 className="text-[32px] font-semibold">{slides[current].name}</h1>
                                    <p className="mt-3 text-slate-500">{slides[current].role}</p>
                                    <p className="mt-5 w-[100%] text-[10px] md:text-[16px] leading-5">{slides[current].description}</p>
                                    <a className="w-[70%] block text-center text-[19px] text-slate-900 font-bold mt-8 px-[19px] py-[20px] bg-sky-300 rounded-[100px]" href="">Get a consultation</a>
                                </div>
                </div>
                <div className='hidden group-hover:block text-white absolute -translate-x-0 translate-y-[-50%] top-[50%] rounded-full bg-black/40 left-5 cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={60} />
                    </div>
                <div className='hidden group-hover:block text-white absolute -translate-x-0 translate-y-[-50%] top-[50%] rounded-full bg-black/40 right-5 cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={60} />
                </div>
            </div>
            
            <div className="flex justify-center items-center mt-[10px]">
                
                        <div className="flex justify-center items-center text-white">
                            {
                                slides.map((slide, index) => 
                                    <RxDotFilled key={index} className={index === current ? 'text-white' : 'text-slate-700'} size={50} onClick={() => setCurrent(index)} />
                                )
                            }
                        </div>
            </div>
                
            
        </>
        )
}

export default Slider
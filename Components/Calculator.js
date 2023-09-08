const Calculator = () => {
    return(
        <>
            <div className="my-12 flex flex-row flex-wrap content-between max-sm:justify-center h-[85px]">
                {/* Radio buttons */}
                <label>
                    <input type="radio" name="radio" id="radio1" className="peer sr-only appearance-none"/>
                    <label className="peer-checked:bg-blue-500 mr-2 bg-slate-800 text-xl font-medium rounded-[130px] px-[20px] py-[10px]" htmlFor="radio1">Travel</label>
                </label>
                <label>
                        <input type="radio" name="radio" id="radio2" className="peer appearance-none"/>
                        <label className="peer-checked:bg-blue-500 mr-2 bg-slate-800 text-xl font-medium rounded-[130px] px-[20px] py-[10px]" htmlFor="radio2">Health</label>
                        
                </label>

                <label>
                    <input type="radio" name="radio" id="radio3" className="peer sr-only appearance-none"/>
                    <label className="peer-checked:bg-blue-500 mr-2 bg-slate-800 text-xl font-medium rounded-[130px] px-[20px] py-[10px]" htmlFor="radio3">CASCO</label>
                        
                </label>
                <label>
                    <input type="radio" name="radio" id="radio4" className="peer appearance-none"/>
                    <label className="peer-checked:bg-blue-500 mr-2 bg-slate-800 text-xl font-medium rounded-[130px] px-[20px] py-[10px]" htmlFor="radio4">Mortgage</label>
                        
                </label>
                <label>
                    <input type="radio" name="radio" id="radio5" className="peer appearance-none"/>
                    <label className="peer-checked:bg-blue-500 mr-2 bg-slate-800 text-xl font-medium rounded-[130px] px-[20px] py-[10px]" htmlFor="radio5">Fire</label>

                </label>
            </div>
            <div className="grid grid-cols-2" style={{fontFamily:'Poppins'}}>
                <div className="flex flex-col pr-3">
                    <label className="text-xs" htmlFor="input1">Enter the country</label>
                    <input style={{fontFamily:'Poppins'}} placeholder="Australia" className="text-white mt-2 rounded-full bg-slate-800 p-[22px]" type="text" id="input1" />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs" htmlFor="input2">Choose travel dates</label>
                    <input style={{fontFamily:'Poppins'}} placeholder="11 Apr-20 Apr" className="text-white text-[17px] mt-2 rounded-full bg-slate-800 p-[22px]" type="text" id="input2" />
                </div>
                
            </div>
            <div className="w-full mt-11">
                <button className="p-[25px] w-full font-bold text-[19px] bg-red-400 rounded-full">calculate</button>
            </div>
        </>
    )
}

export default Calculator
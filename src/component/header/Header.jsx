import React, { useEffect, useState } from 'react'
import { BiLogoTelegram } from "react-icons/bi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };


    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true' ? true : false
      );
    
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('darkMode', 'true');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('darkMode', 'false');
        }
      }, [isDarkMode]);
    
      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };




  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
        <div className='max-w-96 pt-10 pr-10 pl-10'>

        <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="image"/>
        </div>
        <div className='flex gap-4 items-center justify-center p-4 flex-wrap '>
        <select
        className="flex items-center justify-center appearance-none min-w-8 h-8  bg-button-custom-color font-[700]    text-white  rounded-xl focus:outline-none focus:bg-gray-500 focus:border-gray-500"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" className='text-center p-2'>INR</option>
        <option value="option1">Option 1</option>
       
      </select>
        <select
        className="flex items-center justify-center appearance-none min-w-12 h-8  bg-button-custom-color font-[700]    text-white  rounded-xl focus:outline-none focus:bg-gray-500 focus:border-gray-500"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" className='text-center  p-2'>BTC</option>
        <option value="option1">Option 1</option>
        
      </select>
       <p className=' text-center whitespace-nowrap appearance-none pt-1 pr-2 pl-2 pb-1 bg-button-custom-color font-[700]    text-white  rounded-xl focus:outline-none focus:bg-gray-500 focus:border-gray-500 tracking-tighter'>BUY BTC</p>
        </div>
        <div className='flex items-center justify-center gap-4 flex-wrap '>
            <p className='text-white'>Timing</p>
       
            <button className='bg-blue-400 p-2 rounded-xl height-[35px]'> <span className='flex items-center gap-1 text-white font-[600] leading-{25px} tracking-tight whitespace-nowrap min-w-40'> <BiLogoTelegram className='text-[25px]'/>  Connect Telegram</span></button>
            <button  onClick={toggleDarkMode}
      className=" text-blue-400  pl-2 pr-2 pt-1 pb-1 rounded-3xl font-semibold  ">
         {isDarkMode ? <FaToggleOn className='text-[55px]'/>  : <FaToggleOff className='text-[55px]'/>}
         
         </button>
        </div>
      
    </div>
  )
}

export default Header

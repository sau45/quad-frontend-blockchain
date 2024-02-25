import React, { useEffect, useRef, useState } from 'react'
import { BiLogoTelegram } from "react-icons/bi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { IoMdArrowDropdown } from "react-icons/io";
import './header.css'

const Header = () => {

  const btcdata = [
    "BTC",
    "ETH",
    "USDT",
    "XRP",
    "TRX",
    "DASH",
    "ZEC",
    "XEM",
    "ISOT",
    "WIN",
    "BTT",
    "WRX"
  ]

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.add('white');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };




  const renderTime = ({ remainingTime }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);

    if (currentTime.current !== remainingTime) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = remainingTime;
    } else {
      isNewTimeFirstTick.current = false;
    }

    // force one last re-render when the time is over to tirgger the last animation
    if (remainingTime === 0) {
      setTimeout(() => {
        setOneLastRerender((val) => val + 1);
      }, 20);
    }



    return (
      <div className="time-wrapper border-4 border-blue-300 rounded-full pr-10 pl-4 pt-3 pb-10 ">


        <div
          key={prevTime.current}
          className='text-blue-300 text-[20px] font-[700] '

        >
          <p className='pb-6'>{prevTime.current}</p>
        </div>

      </div>
    );
  };




  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
      <div className='max-w-96 pt-10 pr-10 pl-10'>

        <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="image" />
      </div>
      <div className='flex gap-4 items-center justify-center p-4 flex-wrap '>
        <select
          className="flex items-center justify-center appearance-none min-w-16 h-10  bg-button-custom-color font-[700]    text-white  rounded-xl focus:outline-none focus:bg-gray-500 focus:border-gray-500"
          value={selectedOption}
          onChange={handleSelectChange}
        >

          <option value="" className='text-center p-12 m-12'>INR </option>
       

        </select>
        <select
    className="flex items-center justify-center appearance-none min-w-12 h-10 bg-button-custom-color font-[700] text-white rounded-xl focus:outline-none focus:bg-gray-500 focus:border-gray-500"
    value={selectedOption}
    onChange={handleSelectChange}
  >
    <option value="" className="text-center p-4">
      BTC
    </option>
    
    {btcdata.map((item) => (
      <option key={item} value={item} className=' text-[20px] text-center'>
        {item}
      </option>
    ))}
  </select>
        <p className=' text-center whitespace-nowrap appearance-none py-2 px-3  bg-button-custom-color font-[700]    text-white  rounded-xl focus:outline-none focus:bg-gray-500 focus:border-gray-500 tracking-tighter'><a target='_blank' href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn">BUY BTC</a></p>
      </div>
      <div className='flex items-center justify-center gap-4 flex-wrap '>
        <div className="timer-wrapper-1 pr-8 ">
          <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={["#3DC6C1"]}


          >
            {renderTime}
          </CountdownCircleTimer>
        </div>

        <button className='bg-blue-400 p-2 rounded-xl height-[35px]'> <span className='flex items-center gap-1 text-white font-[600] leading-{25px} tracking-tight whitespace-nowrap min-w-40'> <BiLogoTelegram className='text-[25px]' />  Connect Telegram</span></button>
        <button onClick={toggleDarkMode}
          className="   pl-2 pr-2 pt-1 pb-1 rounded-3xl font-semibold  ">
          {isDarkMode ? <FaToggleOn className='text-[55px] text-button-custom-color ' /> : <FaToggleOff className='text-[55px] text-button-custom-color ' />}

        </button>
      </div>

    </div>
  )
}

export default Header

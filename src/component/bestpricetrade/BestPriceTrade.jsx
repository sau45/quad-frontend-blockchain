import React, { useEffect } from 'react'
import AppTable from '../table/Table'

import fetchapi from '../../utility/fetchapi'

const BestPriceTrade = () => {
    useEffect(()=>{
        const fetchdata = async()=>{

            const response = await fetchapi();
            console.log(response)
        }
        fetchdata();
    },[])
    return (
        <div className='pl-8 pr-8'>

       
        <div className='flex items-center justify-center gap-20 flex-wrap pt-8 pb-20'>
            <div className='flex flex-col gap-x-16 md:flex-row'>
                <div className='flex flex-col items-center justify-center'>

                    <p className='text-[50px] text-custom-color'>0.1 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>5 Mins</p>

                </div>
                <div className='flex flex-col items-center justify-cente'>


                    <p className='text-[50px] text-custom-color'>0.96 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>1 Hour</p>
                </div>
            </div>
      

            <div className='flex flex-col items-center justify-cente whitespace-nowrap gap-4 pb-12 pl-4 pr-4'>
                <p className='text-[30px] text-gray-600 '>Best Price To Trade</p>
                <p className='md:text-[70px] text-[45px] text-white'>₹ 26,56,110</p>
                <p className='md:text-[18px] text-[11px] text-gray-600 '>Average BTC/INR net Price including commision</p>
            </div>
            <div className='flex flex-col gap-x-16  md:flex-row'>
                <div className='flex flex-col items-center justify-cente'>

                    <p className='text-[50px] text-custom-color'>2.73 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>1 Day</p>
                </div>
                <div className='flex flex-col items-center justify-cente'>

                    <p className='text-[50px] text-custom-color'>7.51 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>7 Day</p>
                </div>
            </div>

        </div>
      <AppTable/>
        </div>
    )
}

export default BestPriceTrade

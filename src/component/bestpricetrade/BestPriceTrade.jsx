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
        <div>

       
        <div className='flex items-center justify-center gap-12 flex-wrap pt-8'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col items-center justify-center'>

                    <p className='text-[50px] text-blue-400'>0.1 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>5 Mins</p>

                </div>
                <div className='flex flex-col items-center justify-cente'>


                    <p className='text-[50px] text-blue-400'>0.96 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>1 Hour</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-cente whitespace-nowrap pl-4 pr-4'>
                <p>Best Price To Trade</p>
                <p className='text-[60px]'>₹ 26,56,110</p>
                <p className='text-[12px] text-gray-400 opacity-15'>Average BTC/INR net Price including commision</p>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col items-center justify-cente'>

                    <p className='text-[50px] text-blue-400'>2.73 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>1 Day</p>
                </div>
                <div className='flex flex-col items-center justify-cente'>

                    <p className='text-[50px] text-blue-400'>7.51 %</p>
                    <p className='text-[20px] text-gray-400 opacity-15'>7 Day</p>
                </div>
            </div>

        </div>
      <AppTable/>
        </div>
    )
}

export default BestPriceTrade

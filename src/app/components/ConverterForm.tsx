'use client';
import React, { useEffect, useState } from 'react'
import logo from '../../../public/assets/logo.png'
import logoCrypto from '../../../public/assets/cryptocurrency_bnb.png'
import BNB from '../../../public/assets/BNB.png'
import arrow from '../../../public/assets/arrow.png'
import Image from 'next/image'
import { getApi } from '../api'

const ConverterForm = () => {
  const [listData, setListData] = useState([])
  const [showDropdown , setShowDropdown] = useState<boolean>(false)
  const [selectedData ,setSelectedData] = useState<string>('bnb')
  const [defaultSelect ,setDefaultSelect] = useState<string>('')

  useEffect(() => {
    getApi('/coins/list')
      .then((res: any) => {
        console.log('get list res----', res);
        setListData(res?.data)
      
      })
      .catch((err) => {
        console.log('get comments err----', err);
      });
  }, []);
  
  return (
    <div className="absolute top-0 left-0 z-50 max-w-[1920px] w-full flex h-screen">
        <div className="w-[500px] mx-auto flex justify-center items-center flex-col">
         <Image src={logo} alt="Logo" className="w-[150px] h-[176px]"/>

         <div className="pt-20 w-[402px] mx-auto">
            <div className="w-full relative mb-7">
            <input type="number" className="border-b-2 border-[#e4e4e414] pl-4 min-h-[63px] h-max p-2 bg-[rgba(228,228,228,0.08)] w-full"/>
            <span className="flex flex-cols gap-5 justify-center items-center h-full absolute top-0 right-[14px] text-[#E4E4E4]">
                <span className="uppercase text-bold text-[20px]">{selectedData}</span>
                {/* <Image className="object-center object-contain" src={BNB} alt="BNB"/> */}
                <Image className="object-center object-contain" src={logoCrypto} alt="logoCrypto"/>
            </span>
            </div>
           
           <div className="w-full relative mb-7" onClick={() => setShowDropdown(!showDropdown)}>
              {/* <input type="number" /> */}
              <div className="flex justify-start text-[20px] items-center border-b-2 border-[#e4e4e414] pl-4 h-[63px] bg-[rgba(228,228,228,0.08)] w-full">
                {defaultSelect}
              <span className="cursor-pointer font-bold flex justify-center items-center h-full absolute top-0 right-[14px] text-[#E4E4E4]">
                Select
                <Image className="object-center object-contain" src={arrow} alt="Arrow"/>
            </span>
              </div>
            {
              showDropdown &&
            <ul className={`max-h-[200px] overflow-y-auto absolute left-0 top-[64px] bg-black/[80%] w-full`}>
              {/* {console.log(listData ,'listData')} */}
            {listData?.slice(0,30).map((ele:any, index:number)=>{
              return(
                <li key={index} className="overflow-hidden px-4 cursor-pointer py-2 hover:bg-white/[30%]"
                onClick={() => {setSelectedData(ele.symbol) , setDefaultSelect(ele.name)}}>{ele.name}</li>
              )
            })}
            </ul>
            }
             
           </div>
            <button className="cursor-pointer font-bold w-full text-[#313131] text-[24px] h-[63px] bg-white flex justify-center items-center">Connect Wallet</button>
         </div>
        </div>

    </div>
  )
}

export default ConverterForm

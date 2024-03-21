import React from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import food from './images/food5.jpg'
import { FaPhoneVolume } from "react-icons/fa6";


const Signup = () => {
  return (
    <>
    
    <div className='section w-[100%] py-[50px] bg-gray-800'>
        <div className=" rounded-md container bg-[#b8a7a78f] w-[80%] mx-auto px-[50px] py-[20px] bg-no-repeat bg-cover relative" style={{backgroundImage:`url(${food})`}}>
          <div className='absolute left-0 top-0 w-full h-full bg-[#28262637]'></div>
          <div className='py-6 relative z-50'>
            <h2 className='text-6xl font-semibold font-serif text-white md:ml-20'>Sign Up</h2>
          </div>
          <div className='flex  h-[500px] overflow-hidden relative z-50'>

              <div className='h-full bg-[#7e787857] w-[35%] rounded-md flex justify-center items-center shadow-xl shadow-white'>
                <form action="">
                    <IoPersonCircle className='text-7xl  md:ml-[30%]' />
                    <input className='outline-none border-b-4 rounded-md border-amber-700 text-white bg-transparent placeholder:text-white px-8' type="text" placeholder='Enter your email...' /><br />
                 
                    <CiLock  className='text-7xl md:ml-[30%] mt-8 font-semibold' />
                    <input className='outline-none border-b-4 rounded-md border-amber-700 text-white bg-transparent placeholder:text-white px-8' type="password" placeholder='Enter your password...' /> 
                  
                    <FaPhoneVolume className='text-5xl md:ml-[30%] mt-8 font-semibold' />
                    <input className='outline-none border-b-4 rounded-md border-amber-700 text-white bg-transparent placeholder:text-white px-8' type="tel" placeholder='Enter your number...' /> 
                  
                  <p className='text-[#ffff] flex justify-end py-2 px-2'>Forgot password?</p>
                  <div className='justify-center items-center flex py-8'>
                  <button className='bg-amber-600 px-6 py-2 rounded-md text-white font-semibold hover:bg-[#3b363675] border-2 hover:border-amber-600'>Login</button>
                  </div>
                </form>
              </div>
              {/* <div>
                <img className='h-full' src={food} alt=""  />
              </div> */}

          </div>
        </div>
      </div>
    
    </>
  )
}

export default Signup
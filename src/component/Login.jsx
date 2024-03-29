import React, { useState } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import food from './images/food3.avif';
import {NavLink} from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword,setShowPassword] =useState(false);

  return (
    <>
      <div className='section w-[100%] py-[50px] bg-gray-800'>
        <div className=" rounded-md container bg-[#b8a7a78f] w-[80%] mx-auto px-[50px] py-[20px] bg-no-repeat bg-cover relative" style={{backgroundImage:`url(${food})`}}>
          <div className='absolute left-0 top-0 w-full h-full bg-[#685d5d51]'></div>
          <div className='py-6 relative z-50'>
            <h2 className='text-center text-6xl font-semibold font-serif text-white md:ml-[48%]'>Login</h2>
          </div>
          <div className='flex md:justify-end justify-center items-center h-[500px] overflow-hidden relative z-50'>

              <div className='h-full bg-[#39353500] md:w-[35%] w-[70%] rounded-md flex justify-center items-center shadow-xl shadow-white md:mr-[8%]'>
                <form action="">
                    <div className='flex md:mr-[30%] justify-center items-center'><IoPersonCircle className='text-7xl  md:ml-[30%] ' /></div>
                    <input className='outline-none md:border-b-4 rounded-md border-amber-700 text-white bg-transparent placeholder:text-white md:px-8' type="text" placeholder='Enter your email...' /><br />
                 
                    <div className='flex md:mr-[30%] justify-center items-center'><CiLock  className='text-7xl md:ml-[30%] mt-8 font-semibold' /></div>
                    <div className='relative'>
                      <input className='outline-none md:border-b-4 rounded-md border-amber-700 text-white bg-transparent placeholder:text-white md:px-8' type={showPassword ? "text" : "password"} placeholder='Enter your password...' /> 
                      <div className='absolute bottom-[50%] right-3 cursor-pointer translate-y-[50%]' onClick={() => setShowPassword(prev => !prev)}
>  
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </div>
                    </div>
                   
                  <p className='text-[#ffff] flex justify-end py-2 px-2'>Forgot password?</p>
                  <div className='justify-center items-center flex py-8'>
                  <button className='bg-amber-600 px-6 py-2 rounded-md text-white font-semibold hover:bg-[#3b363675] border-2 hover:border-amber-600'>Login</button>
                  </div>

                  <div className='flex justify-center items-center'>
                      <p className='text-white'>Don't have an account?</p>
                      <NavLink to={"/signup"} href="#pablo" className="text-amber-700 font-semibold text-[16px] mx-2" >Signup</NavLink>
                      
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

export default Login

// import React from 'react'

// const Login = () => {
//   return (
//     <>
    
//       <form action=''>
//         <div>
//           <label>Enter-email</label>
//           <input type='text' placeholder='enter your email'></input>
//         </div>
//       </form>

//     </>
//   )
// }

// export default Login
import React, { useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import {NavLink} from 'react-router-dom';
//import logo from '../component/images/Logo.png'
import { GiFoodTruck } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
const Header = () => {
const [menu,setMenu] = useState(false);

  return (
   <>
 <nav className="bg-gray-800 py-1">
  <div className="container mx-auto flex justify-between items-center">
    <div className="logo text-white text-xl font-bold">
      <IoFastFoodOutline className='text-6xl md:ml-4 text-amber-600 hover:text-white' />
      {/* <GiFoodTruck className='text-6xl ml-4 text-amber-600' /> */}
    </div>
    
    <div className="search flex ml-52"> {/* Adjusted margin here */}
      <input id="searchInput" type="text" placeholder="Search here..." className="border bg-[#c1cdda44] rounded-l text-white px-8 py-1 focus:outline-none border-amber-600" />
      <button className="bg-amber-700 text-white px-4 py-1 rounded-r border-transparent hover:bg-gray-800 hover:border-amber-600 border-2">Search</button>
    </div>

    <div className="links hidden md:flex gap-x-6 mr-32"> {/* Adjusted margin here */}
      <NavLink to={"/"} href="#pablo" className="text-white text-xl mx-2 transition duration-300 ease-out hover:text-amber-600 hover:translate-x-1" >Home</NavLink>
      <NavLink to={"/about"} href="#pablo" className="text-white text-xl mx-2 transition duration-300 ease-out hover:text-amber-600 hover:translate-x-1" >About</NavLink>
      <NavLink to={"/contact"} href="#pablo" className="text-white text-xl mx-2 transition duration-300 ease-out hover:text-amber-600 hover:translate-x-1" >Contact</NavLink>
      <NavLink to={"/profile"} href="#pablo" className="text-white text-xl mx-2 transition duration-300 ease-out hover:text-amber-600 hover:translate-x-1" >Profile</NavLink>
      <NavLink to={"/cart"} href="#pablo" className="text-white text-xl mx-2 transition duration-300 ease-out hover:text-amber-600 hover:translate-x-1" >Cart</NavLink>
    </div>

    <div className="userdetails hidden md:block">
      <button className="text-white text-[18px] px-2  bg-amber-600 rounded-md mx-2 hover:bg-gray-800 border-transparent hover:border-amber-600 border-2">Signup</button>
      <button className="text-white text-[18px] px-2  bg-amber-600 rounded-md mx-2 hover:bg-gray-800 border-transparent hover:border-amber-600 border-2">Login</button>
    </div>
    <button className="text-white text-3xl md:hidden ml-16"><CiMenuKebab /></button>
  </div>
</nav>


   </>
  )
}

export default Header
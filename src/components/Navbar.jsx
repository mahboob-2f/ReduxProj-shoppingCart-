import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='w-[73%] mx-auto flex  justify-between items-center pt-[10px]'> 
      <div className='w-44 flex items-center justify-center'>
        <NavLink to='/'>
           <img src="./logo.png" alt="shopping logo" loading='lazy'/>
        </NavLink>
       
      </div>
      <div className='text-white'>
        <nav className='flex  list-none space-x-6 justify-center items-center'>
          <NavLink to='/'>
            <li className='text-[16px] font-semibold '>Home</li>
            </NavLink>
          <NavLink to='/cart'>
            <li ><FaShoppingCart  className='text-2xl'/> </li>
            </NavLink>         
          </nav>
      </div>
    </div>
  )
}

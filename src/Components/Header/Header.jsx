import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='sticky top-0 bg-black'>
      <div className='flex    p-1 rounded-lg bg-[#212121] justify-between'>
        <div className='flex border-solid border-2 border-gray-700  p-1 rounded-2xl gap-1 '>
          <img src="src\Components\Header\resources\RoBoico.png" className='h-10 w-10 rounded-[50%]' alt="" />
          <h2 className='text-3xl text-white'>Basic Router</h2>
        </div>
        <div className='flex gap-1 justify-center text-center items-center p-1 '>

          <NavLink
            to="/"
            className={({ isActive }) =>
              ` flex justify-center text-center items-center  py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700 underline" : "text-white"} 
            bg-gray-500 w-20 h-8 hover:shadow-cyan-500/50 rounded-[30px]  cursor-pointer border-2 border-black border-solid border-b  hover:bg-black   lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              ` flex justify-center text-center items-center  py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700 underline" : "text-white"} 
            bg-gray-500 w-20 h-8 hover:shadow-cyan-500/50 rounded-[30px]  cursor-pointer border-2 border-black border-solid border-b  hover:bg-black   lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
           GitHub
          </NavLink>


        </div>
        <div className='flex  justify-center text-center items-center p-1 '>
          <input type="text" placeholder='Search' className='rounded-[40px] pl-4' />
        </div>
      </div>
    </header>
  )
}

export default Header

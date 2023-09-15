import { useState } from "react";
import { NavLink } from "react-router-dom";

import {CgClose,CgMenu} from "react-icons/cg"
import {FiShoppingCart} from "react-icons/fi"

const Navber = () => {
  const [icon,setIcon] = useState()

  return (
    <header className=' h-20  flex flex-col justify-center items-center bg-slate-200'>
    <nav className='wrapper    flex items-center justify-between   '>
      <div className="">
        <h2 className='flex gap-1 text-xl border-2'><span className="bg-violet-700 text-slate-100 px-1 text-center">Chic</span>Chuoter</h2>
      </div>

      <div className={icon ? "navber active" : "navber"}>
        <ul className=' nav-lists'>
          <li className=''>
            <NavLink
              to='/'
              onClick={() => setIcon(false)}
              className='max-md:text-xl nav-item nav-item'
            >
              Home
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/about'
              onClick={() => setIcon(false)}
              className='max-md:text-xl nav-item'
            >
              About
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/products'
              onClick={() => setIcon(false)}
              className='max-md:text-xl nav-item'
            >
              Products
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/contact'
              onClick={() => setIcon(false)}
              className='max-md:text-xl nav-item'
            >
              Contact
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/login'
              onClick={() => setIcon(false)}
              className='max-md:text-xl nav-item'
            >
              login
            </NavLink>
          </li>
          <li className='relative'>
            <NavLink
              to='/cart'
              onClick={() => setIcon(false)}
              className='max-md:text-xl nav-item'
            >
              <FiShoppingCart className='text-xl max-md:text-2xl' />
              <span className='absolute -top-2 left-4 bg-violet-500 rounded-full text-xs '>
                10
              </span>
            </NavLink>
          </li>
        </ul>

         {/* mobile responsive */}
      <div className='mobile-navber-btn '>
        <CgMenu
          name='menu-outline'
          className='mobile-navber-icon text-4xl'
          onClick={() => setIcon(true)}
        />
        <CgClose
          name='close-outline'
          className='mobile-navber-icon close-outline'
          onClick={() => setIcon(false)}
        />
      </div>
      </div>
     
    </nav>
  </header>
  )
}

export default Navber
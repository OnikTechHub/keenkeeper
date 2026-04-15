import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { RiTimeLine } from 'react-icons/ri';

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className={({ isActive }) => isActive ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg flex items-center gap-2" : "p-2 text-gray-500 flex items-center gap-2"}
      >
        <FaHome />
        Home
      </NavLink>
      <NavLink to="/TimeLine" className={({ isActive }) => isActive ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg flex items-center gap-2" : "p-2 text-gray-500 flex items-center gap-2"}
      >
        <RiTimeLine />
        Timeline
      </NavLink>
      <NavLink to="/Stats" NavLink
        to="/Stats"
        className={({ isActive }) => isActive ? "px-4 p-2 text-white bg-[#244D3F] rounded-lg flex items-center gap-2" : "p-2 text-gray-500 flex items-center gap-2"}
      >
        <FaChartLine />
        Stats
      </NavLink>
    </>
  )

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className='w-11/12 mx-auto flex items-center justify-between'>


        <div className="flex-1 flex items-center">

          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
              {links}
            </ul>
          </div>

          <a className="text-2xl md:text-5xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
        </div>

        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg items-center">
            {links}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
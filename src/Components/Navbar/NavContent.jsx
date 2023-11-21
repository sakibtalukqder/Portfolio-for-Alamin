import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../../assets/alamin.jpg'

const NavContent = () => {

    const closeDrawer = () => {
        document.getElementById("drawer_x").classList.remove("drawer-open")
        document.getElementById("hamburger").classList.remove("hidden")
        document.getElementById("close").classList.add("hidden")
    }

    return (
        <div className='flex flex-col justify-center z-20 bg-slate-50'>
            <label className="btn btn-circle rotate-180 hidden" id='close' onClick={closeDrawer}>
                {/* close icon */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
            <div className='flex justify-center py-6'>
                <figure className=' h-52 w-52 rounded-full overflow-hidden'>
                    <img src={Img} alt="" />
                </figure>
            </div>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li ><NavLink className='text-center' to={'/'}>Home</NavLink></li>
                <li ><NavLink className='text-center' to={'/about'}>About</NavLink></li>
                <li ><NavLink className='text-center' to={'/skill'}>Skill</NavLink></li>
                <li ><NavLink className='text-center' to={'/education'}>Education</NavLink></li>
                <li ><NavLink className='text-center' to={'/portfolio'}>Portfolio</NavLink></li>
                <li ><NavLink className='text-center' to={'/contract'}>Contract</NavLink></li>
            </ul>
            <div className='flex justify-center items-end h-full pt-16'>
                <p>&copy; Alamin 2023</p>
            </div>
        </div>
    );
};

export default NavContent;
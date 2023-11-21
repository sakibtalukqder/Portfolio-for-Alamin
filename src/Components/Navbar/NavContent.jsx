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
        <div className='flex flex-col justify-center z-20 bg-slate-50 mt-4'>
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
                <div className='flex items-center justify-center flex-col'>
                    <header className="footer-title">Social</header>
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                <p>&copy; Alamin 2023</p>
                </div>
            </div>
        </div>
    );
};

export default NavContent;
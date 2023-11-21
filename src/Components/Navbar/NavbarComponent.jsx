import React from 'react';
import NavContent from './NavContent';

const NavbarComponent = ({ children }) => {

  const openDrawer = () => {
    document.getElementById("drawer_x").classList.add("drawer-open")
    document.getElementById("hamburger").classList.add("hidden")
    document.getElementById("close").classList.remove("hidden")
  }
  

  return (
    <div className=' absolute block'>

      <div className=' my-4 z-10 flex items-center justify-between w-full px-12 lg:hidden'>
        <h1 className=' text-2xl font-bold'>Alamin</h1>
        <div>
          <label className="btn btn-circle rotate-180 swap swap-rotate " id='hamburger' onClick={openDrawer}>
            {/* hamburger icon */}
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>

        </div>
      </div>

      <div id='drawer_x' className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side z-20 ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          {/* Sidebar content here */}
          <NavContent />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

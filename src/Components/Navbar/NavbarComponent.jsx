import React from 'react';
import NavContent from './NavContent';

const NavbarComponent = ({ children }) => {

  return (
    <div className='w-full'>
      <div id='drawer_x' className="drawer lg:drawer-open w-fu">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div id='drawer_y' className='border'>
            {children}
          </div>
        </div>
        <div className="drawer-side z-20 ">
          <NavContent />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

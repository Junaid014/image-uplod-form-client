import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
       return (
              <div className='w-10/12 mx-auto'>
                     <Outlet/>
              </div>
       );
};

export default Root;
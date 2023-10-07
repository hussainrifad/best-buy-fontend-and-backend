import React from 'react';
import Login from '../authentication/Login';
import Signup from '../authentication/Signup';
import { Link, Outlet } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div className=''>
            <div className='flex justify-around text-2xl'>
            <Link className='hover:bg-green-900 p-3 font-semibold bg-purple-900 text-white w-1/2 text-center' to='/getstarted'>LOGIN</Link><Link className='hover:bg-purple-900 font-semibold bg-green-900 text-white p-3 w-1/2 text-center' to='/getstarted/signup'>SIGNUP</Link>
            </div>
            <div className='flex justify-center mt-10'>
            <Outlet/>
            </div>
        </div>
    );
};

export default GetStarted;
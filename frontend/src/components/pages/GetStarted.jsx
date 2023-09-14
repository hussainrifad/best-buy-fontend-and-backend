import React from 'react';
import Login from '../authentication/Login';
import Signup from '../authentication/Signup';
import { Link, Outlet } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div>
            <div>
            <Link to='/getstarted'>Login</Link><Link to='/getstarted/signup'>SignUp</Link>
            </div>
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default GetStarted;
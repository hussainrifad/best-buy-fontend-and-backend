import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [loginInfo, setLoginInfo] = useState({});


    const handleBlur = (e) => {
        const form = e.target;
        const field = form.name;
        const value = form.value;

        const newLoginInfo = {...loginInfo, };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    }

    const handleSubmit = (e) => {
        e.target.preventDefault;
    }

    return (
        <div className='shadow-2xl mb-10'>
            <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleBlur} type='email' placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleBlur} type="text" placeholder="password" name='password' required className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link to='/getstarted/signup' className="label-text-alt">Don't have an account? <span className='link link-hover text-blue-900 font-semibold'>Sign Up</span> now</Link>
                    </form>
        </div>
    );
};

export default Login;
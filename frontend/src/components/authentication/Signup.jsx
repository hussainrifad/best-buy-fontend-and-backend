import React, { useState } from 'react';

const Signup = () => {
    
    const [signupInfo, setSignupInfo] = useState({});

    const handleBlur = (e) => {
        const form = e.target;
        const field = form.name;
        const value = form.value;

        const newSignupInfo = {...signupInfo};
        newSignupInfo[field] = value
        setSignupInfo(newSignupInfo)
    }

    const handleSubmit = (e) => {
        e.target.pre
    }

    return (
        <div className='shadow-2xl mb-10'>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input onBlur={handleBlur} name='username' type="text" placeholder="user name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleBlur} name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleBlur} name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default Signup;
import React, { useContext, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { BsFillCartPlusFill, BsFillSunFill } from 'react-icons/bs';
import { BiLogOut, BiLogIn, BiSolidMoon } from 'react-icons/bi';
// import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/mainLogo.png';
import { Link } from 'react-router-dom';


const Header = ({setDarkMode}) => {
    
    const darkModeButtonState = localStorage.getItem('darkModeButton')  
    const [menuOpen, setMenuOpen] = useState(false);
    const [onButton, setOnbutton] = useState(darkModeButtonState);

    const handleDarkMode = (value) => {
        setOnbutton(value);
        setDarkMode(value);
        localStorage.setItem('darkModeState', value);
        localStorage.setItem('darkModeButton', value);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // const handleLogOut = () => {
    //     localStorage.removeItem('accessToken');
    //     logOut();
    // }

    return (
        <nav className="lg:mx-10 p-4 md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div className='w-72 flex gap-2'>
                    <img src={logo} alt="" />

                    {/* here we implement the dark mode and button on of functionality  */}
                    
                    {
                        onButton ? <button onClick={() => handleDarkMode(false)}><span className='text-2xl text-white'><BsFillSunFill /></span></button> 
                            : <button onClick={() => handleDarkMode(true)}><span className='text-2xl bg-blue-700 '><BiSolidMoon /></span></button>
                    
                    }
                </div>
                
                <button
                    className="md:hidden text-green-900 text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {
                        menuOpen ? <RxCross1 /> : <FiMenu />
                    }
                </button>
            </div>
            <div
                className={`${menuOpen ? 'block' : 'hidden'
                    } md:flex md:items-center mt-4 md:mt-0`}
            >
                <Link to='/' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    HOME
                </Link>
                <Link to='/blogs' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    QUESTIONNAIRES
                </Link>
                <Link to='/blogs' className="hover:text-green-800 block mt-4 md:inline-block md:mt-0 md:ml-6">
                    GET STARTED
                </Link>
                
                
            </div>
        </nav>
    );
};

export default Header;

import React, {useState} from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared//Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    
    const state = localStorage.getItem('darkModeState');
    const [darkMode, setDarkMode] = useState(state);

    return (
        <section data-theme={darkMode ? "dark" : "light"}>
            <div>
                <Header setDarkMode={setDarkMode}></Header>
            </div>
            <div className='container mx-auto'>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </section>
    );
};

export default Main;
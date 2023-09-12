import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <section>
            <div>
                <Header/>
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
import React from 'react';
import BannerTop from './Banners/BannerTop';
import PopularProducts from './PopularProducts';
import ShopNow from './Banners/ShopNow';
import Bannerbottom from './Banners/Bannerbottom';

const Home = () => {
    return (
        <div className='p-2'>
            <BannerTop/>
            <PopularProducts/>
            <ShopNow/>
            <Bannerbottom/>

        </div>
    );
};

export default Home;
import React from 'react';
import shop_now from '../../../images/banners/shop_now.jpg';
import { Link } from 'react-router-dom';

const ShopNow = () => {

    return (
        <section>
            <div className='bg-cover w-full p-10' style={{backgroundImage: `url(${shop_now})`}}>
                <h1 className='text-cyan-300'>Check out our <br /><span className='text-2xl font-semibold'>New Arrival</span><br /> products</h1>
                <p className='text-gray-300 my-5 text-start'>Discover our wide range of products that cater to your every need. Whether you're looking for the latest fashion trends, electronics, home decor, or more, we've got you covered. Shop with confidence and convenience at Best Buy</p>
                <p className='my-5 text-gray-400'>Stay ahead of the curve with our latest arrivals. Be the first to own the hottest products in the market.We offer secure payments, fast shipping, and hassle-free returns. Your satisfaction is our top priority.</p>
                <div className='my-10 customClass'>
                    <Link to='/products' className='hover:text-black px-5 py-2 bg-green-900 text-white'>SHOP NOW</Link>
                </div>
            </div>
        </section>
    );
};

export default ShopNow;
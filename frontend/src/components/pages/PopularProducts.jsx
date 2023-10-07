import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularProducts = () => {

    const [popularProd, setPopularProd] = useState([]);
    
    useEffect(()=>{
        
        const fetchData = async() => {
            const res = await fetch('http://localhost:8000/popular-products');
            const data = await res.json();
            setPopularProd(data.popularProducts);
        }
        fetchData();

    },[])

    return (
        <section>
            <div className='my-10'>
                <h1 className='font-bold text-2xl my-5 font-mono'>POPULAR PRODUCTS</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 text-sm  gap-5'>
            {
                popularProd.map(prod => <div className='shadow-2xl p-5 flex flex-col justify-between'>
                    <div className='my-2'>
                        <img className='object-senter' src={prod.img} alt="" />
                    </div>
                    <div>
                    <div>
                        <div className='my-2'>
                            <h1 className='font-semibold'>{prod.name}</h1>
                            <h1 className='font-semibold'>{prod.seller}</h1>
                        </div>
                    </div>
                        <div className='flex justify-center'>
                            <button className='px-4 py-2 bg-green-900 text-white hover:bg-purple-900'>PRODUCT DETAILS</button>
                        </div>
                    </div>
                    </div>)
            }
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/products' className='px-4 py-2 bg-purple-900 text-white'>SEE ALL PRODUCTS</Link>
            </div>
        </section>
    );
};

export default PopularProducts;
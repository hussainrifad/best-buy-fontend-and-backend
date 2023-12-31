import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    
    

    useEffect ( () => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:8000/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchData()
    }, [])

    return (
        <section>
            <div className='p-4'>Filter</div>
            <div className='sm:p-4 sm:p-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {products.map(prod => <Product key={prod._id} prod={prod}></Product>)}
            </div>
        </section>
    );
};

export default Products;
import React from 'react';

const Product = ({prod}) => {
    const {catagory, name, seller, price, rating, ratingsCount, img, stock} = prod
    
    return (
        <section className='p-3'>
            <div className=''>
                <img object-center src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h1>{price}</h1>
            </div>
            <div>
                <button>ADD TO BAG</button>
            </div>
        </section>
    );
};

export default Product;
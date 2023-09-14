import { space } from 'postcss/lib/list';
import React from 'react';
import { AiOutlineArrowRight, AiFillStar } from 'react-icons/ai'

const Product = ({prod}) => {
    const {catagory, name, seller, price, ratings, ratingsCount, img, stock} = prod
    const arr = Array(ratings).fill();
    
    return (
        <section className='p-5 text-sm shadow-2xl flex flex-col justify-between'>
            <div className='my-2'>
                <img className='object-senter' src={img} alt="" />
            </div>
            <div>
                <div className='my-2'>
                    <h1 className='font-semibold'>{name}</h1>
                    <h1 className='font-semibold'>$ {price}</h1>
                    <h1 className='font-semibold'>{seller}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 my-3'>
                        {arr.map(rating => <div><span className='text-yellow-600'><AiFillStar/></span></div>)}
                    </div>
                    <div className='font-semibold'>
                        <h1>{ratingsCount}</h1>
                    </div>
                </div>
                <button className='w-full font-semibold border text-white bg-purple-900 hover:bg-green-700 py-2 flex justify-around items-center'>
                    <span>ADD TO BAG </span><span className='text-md'><AiOutlineArrowRight/></span>
                </button>
            </div>
        </section>
    );
};

export default Product;
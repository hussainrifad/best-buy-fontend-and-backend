import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, deleteCart, increaseQuantity, removeProduct } from '../reduxCart/cartSlice';

const Cart = () => {
    const items = useSelector(state => state.myCart.cart);
    const test = useSelector( state => state.myCart.totalPrice);
    const dispatch = useDispatch();

    let totalPrice = 0;
    let totalQuantity = 0;

    for (let i = 0; i < items.length;  i++ ) {
        totalPrice = parseInt(items[i].price)*parseInt(items[i].quantity) + totalPrice;
        totalQuantity = parseInt(items[i].quantity) + totalQuantity;
    }

    return (
        <div>
            Cart
            <h1>{totalPrice}</h1>
            <h1>{totalQuantity}</h1>
            <button onClick={() => dispatch(deleteCart())}>clear Cart</button>
            <h1>{test}</h1>
            <div>
                {
                    items?.map(item => 
                        <div className='border p-5 flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between'>
                            <img className='w-40 h-40' src={item.img} alt="" />
                            <div className='md:w-2/5'>
                                <h1>{item.name}</h1>
                            </div>
                            <div className='flex items-center gap-6 '>
                                <button onClick={() => dispatch(decreaseQuantity(item))} className='p-1 px-3 text-3xl bg-gray-400'>-</button>
                                { item?.quantity ? <h1>{item.quantity}</h1> : dispatch(removeProduct(item)) }
                                <button onClick={() => dispatch(increaseQuantity(item))} className='p-1 px-3 text-3xl bg-gray-400'>+</button>
                            </div>
                            <div>
                                <h1>{item.quantity*item.price}</h1>
                            </div>
                            <div>
                                <button onClick={() => dispatch(removeProduct(item))} className='bg-green-800 text-white px-5 py-2 text-sm'>REMOVE</button>
                            </div>
                            
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Cart;
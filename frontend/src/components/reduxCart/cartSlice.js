import { createSlice } from "@reduxjs/toolkit";

// checking it any cart data save in the localStorage of browser 

const saveCart = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];
const saveTotalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0;
const saveTotalPrice = localStorage.getItem("totalPrice") !== null ? JSON.parse(localStorage.getItem("totalPrice")) : 0;

export const cartSlice = createSlice({
    name : 'cart',
    
    initialState:{
        cart: saveCart,
        totalQuanity: saveTotalQuantity,
        totalPrice: saveTotalPrice,
    },

    reducers: {

        // function to add products to the cart 

        addProducts(state, action){
            const exist = state.cart.find(prod => prod._id === action.payload._id);
            
            if(exist){
                return {...state};
            }

            const prod = {...action.payload, quantity : 1}
            const newCart = [...state.cart, prod];
            const newTotalPrice = state.totalPrice + action.payload.price;
            const newTotalQuantity = state.totalQuanity + action.payload.quantityl

            // saving all the updated data to the localStorage 

            localStorage.setItem("cart", JSON.stringify(state.cart.map((item) => item)))
            localStorage.setItem("totalQuantity", JSON.stringify(newTotalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));

            return {
                ...state, 
                cart: newCart,
                totalPrice: newTotalPrice,
            }
        },

        // function to remove product from the cart 

        removeProduct(state, action){
            const newCart = state.cart.filter(prod => prod._id !== action.payload._id);
            const newTotalQuantity = state.totalQuanity - action.payload.quantity;
            const newTotalPrice = state.totalPrice - (action.payload.price)*(action.payload.quantity);

            // saving all the updated data to the localStorage

            localStorage.setItem("cart", JSON.stringify(newCart.map((item => item))));
            localStorage.setItem("totalQuantity", JSON.stringify(newTotalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));

            return {...state,
                cart: newCart,
                totalPrice: newTotalPrice,
                totalQuanity: newTotalQuantity 
            }
        },

        // function to increase quanity for each products 

        increaseQuantity(state, action){
            const updatedQuantity = state.cart.map(prod => {
                if(prod._id === action.payload._id){
                    return {
                        ...prod, quantity: prod.quantity + 1
                    }
                }
                return prod;
            })

            const newTotalPrice = state.totalPrice + action.payload.price;
            const newTotalQuantity = state.totalQuanity + 1;

            // saving all the updated data to the localStorage

            localStorage.setItem("cart", JSON.stringify(updatedQuantity.map((item) => item)));
            localStorage.setItem("totalQuantity", JSON.stringify(newTotalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));
            
            return {
                ...state,
                cart: updatedQuantity,
                totalPrice: newTotalPrice,
                totalQuanity: newTotalQuantity
            }
        },
        
        // function to decrease quantity in the cart 

        decreaseQuantity(state, action){
            const updatedQuantity = state.cart.map(prod => {
                if(prod._id === action.payload._id){
                    return { ...prod, quantity: prod.quantity-1 }
                }
                return prod
            })

            const newTotalPrice = state.totalPrice - action.payload.price;
            const newTotalQuantity = state.totalQuanity - 1;

            // saving all the updated data to the localStorage

            localStorage.setItem("cart", JSON.stringify(updatedQuantity.map((item) => item)));
            localStorage.setItem("totalQuantity", JSON.stringify(newTotalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));

            return {
                ...state,
                cart: updatedQuantity,
                totalPrice: newTotalPrice,
                totalQuanity: newTotalQuantity
            }
        },

        // function to delete the whole cart 

        // deleteCart(state, action){

        //     // storing data to the localStorage 

        //     localStorage.setItem("cart", JSON.stringify(null));
        //     localStorage.setItem("totalQuantity", JSON.stringify(0));
        //     localStorage.setItem("totalPrice", JSON.stringify(0));

        //     return {
        //         ...state,
        //         cart : null,
        //         totalPrice: null,
        //         totalQuanity: null
        //     }
        // }

        deleteCart(state){
            const newCart = [];
            const newTotalPrice = 0;
            const newTotalQuantity = 0;

            // set the data to the localStorage 

            localStorage.setItem("cart", JSON.stringify(newCart.map(item=>item)));
            localStorage.setItem("totalQuantity", JSON.stringify(newTotalQuantity));
            localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));

            return {
                ...state,
                cart : newCart,
                totalPrice: newTotalPrice,
                totalQuanity: newTotalQuantity
            }
        }

    }

})

export const { addProducts, increaseQuantity, decreaseQuantity, removeProduct, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
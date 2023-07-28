'use client'

import { CartContext } from '@/store/CartContext';
import { useContext, useEffect, useRef } from 'react';
import CartList from './CartList';


const Cart = () => {
  
    const { openCart, setOpenCart } = useContext(CartContext)

    const cartRef = useRef(null)


  
  return (
    <div ref={cartRef} className={`fixed top-0 right-0 ${!openCart && 'translate-x-[100%]'} w-80 h-full bg-background-variant shadow-lg transition-all duration-300 ease-out overflow-y-auto`} style={{zIndex:200}} >
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300">
        <h3 className="text-lg text-white font-medium">Cart</h3>
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" onClick={() => setOpenCart(prev => false)}>Close</button>
      </div>
      <div className="p-1">
        <CartList />
      </div>
    </div>
  );
};

export default Cart;
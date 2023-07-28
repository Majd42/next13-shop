'use client'

import { CartContext } from '@/store/CartContext'
import React, { useContext } from 'react'
import CartListItem from './CartListItem'

const CartList = () => {

    const { cart } = useContext(CartContext)
  return (
    <div className='flex flex-col gap-1 '>
        {cart.length == 0 ? 'No Items yet' : 
            cart.map(product => (
                <CartListItem key={product.product.id}  product={product}/>
            ))
        }
    </div>
  )
}

export default CartList
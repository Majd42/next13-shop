'use client'

import React, { useContext } from 'react'
import Button from './UI/Button'
import { CartContext } from '@/store/CartContext'
import { Product } from '@/types'

type PropsTypes = {
  product: Product
}

const ProductItemActions = ({product} : PropsTypes) => {

  const {addItemToCart} = useContext(CartContext)
  return (
    <div>
        <Button onClick={() => addItemToCart(product)}>Add to Cart__</Button>
    </div>
  )
}

export default ProductItemActions
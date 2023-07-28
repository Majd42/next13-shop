'use client'
import React, { useContext } from 'react'
import { BiStore } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
import { CartContext } from '@/store/CartContext'

const Navbar =  () => {


  const {setOpenCart} = useContext(CartContext)
  const {cart } = useContext(CartContext)
  
  return (
    <nav className='flex justify-between px-10  h-[50px] items-center fixed sticky top-0 bg-background ' style={{zIndex:100}}>
        <Link  href={'/'} >
            <div className='flex items-center gap-2'>
                <BiStore className='text-2xl text-secondary' />
                <h3 className='text-xl'>Ecommerce</h3>
            </div>
        </Link>

        
        
        <button onClick={() => setOpenCart(true)} className='relative'>
            <AiOutlineShoppingCart className='text-2xl' />
            <span className=" absolute top-[-40%] bg-secondary text-white text-xs font-medium mr-2 px-2 py-0.5 rounded-full">{cart.length}</span>
        </button>
    </nav>
  )
}

export default Navbar
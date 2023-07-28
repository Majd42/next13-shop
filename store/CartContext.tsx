"use client";

import { CartProduct, Product } from "@/types";
import { createContext, useState, useEffect } from "react";

interface CartContextProps {
  cart: CartProduct[];
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  addItemToCart: (product: Product) => void;
  deleteItemFromCart: (id: number) => void;
  decreaseItemQty: (id: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
  openCart: false,
  setOpenCart: () => {},
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  decreaseItemQty: () => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
 
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);


  useEffect(() => {
    let getCartFromLocatStorage = JSON.parse(localStorage.getItem('cart') as string )
    setCart(getCartFromLocatStorage)
  },[])
  const addItemToCart = (product: Product) => {
    const existingProduct = cart.find((p) => p.product.id === product.id);

    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      setCart(
        cart.map((p) => (p.product.id === product.id ? updatedProduct : p))
      );
    } else {
      const newProduct = {
        product,
        quantity: 1,
      };

      setCart([...cart, newProduct]);
    }
  };

  const decreaseItemQty = (id: number) => {
    const item = cart.find((p) => p.product.id === id);
   
    if (!item) {
      return;
    } else if (item.quantity === 1) {
      
      return deleteItemFromCart(id)

    }

    const updatedItem = {
      ...item,
      quantity: item.quantity - 1,
    };

    setCart(cart.map((p) => (p.product.id == id ? updatedItem : p)));
    
  };

  const deleteItemFromCart = (id: number) => {
    setCart(cart.filter((p) => p.product.id !== id));
  };


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        openCart,
        setOpenCart,
        addItemToCart,
        deleteItemFromCart,
        decreaseItemQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

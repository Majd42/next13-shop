"use client";

import { CartContext } from "@/store/CartContext";
import { CartProduct } from "@/types";
import Image from "next/image";
import React, { useContext } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

type PropTypes = {
  product: CartProduct;
};



const CartListItem = ({ product }: PropTypes) => {

    const {addItemToCart, deleteItemFromCart, decreaseItemQty} = useContext(CartContext)
  return (
    <div className="bg-background min-h-[90px] flex justify-between p-2">
      <div className="w-[50%] flex flex-col  ">
        <div className="flex-1 gap-2 flex flex-col">
          <h3 className="text-xs truncate">{product.product.title}</h3>
          <p className="text-xs text-hint ">Qty: {product.quantity}</p>
          <p className="text-xs text-hint">{(product.product.price * product.quantity).toFixed(2)}$</p>
        </div>
        <div className="flex justify-between">
          <button  onClick={() => deleteItemFromCart(product.product.id)} className="text-secondary">
            <AiOutlineCloseCircle />
          </button>
          <div className="flex gap-1">
            <button onClick={() => addItemToCart(product.product)}>
              <AiOutlinePlusCircle />
            </button>
            <button onClick={() => decreaseItemQty(product.product.id)}>
              <AiOutlineMinusCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-[90px]">
        <Image
          src={product.product.image}
          alt="Product Image"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CartListItem;

"use client";

import { CartContext } from "@/store/CartContext";
import React, { useContext } from "react";

const OverLay = () => {
  const { openCart, setOpenCart } = useContext(CartContext);

  return (
    <>
      {openCart && (
      <div
        onClick={() => setOpenCart(false)}
        className="fixed top-0 h-full bg-background opacity-50 w-full"
        style={{ zIndex: 150 }}
      />
      )}
    </>
  );
};

export default OverLay;

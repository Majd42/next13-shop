import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropTypes = {

  product: Product;
  
};

const ProductItem = ({  product }: PropTypes) => {


  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-[240px] h-[350px] overflow-hidden rounded-sm hover:translate-y-2  transition hover:cursor-pointer">
        <div className="w-full h-[80%] mb-2 ">
          <Image
            src={product.image}
            width={300}
            height={200}
            alt="product image"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 p-1  ">
          <h4 className="text-sm  truncate ">{product.title}</h4>
          <div className="flex justify-between   ">
            <p className="text-hint text-xs">{product.category}</p>
            <p className="text-secondary">{product.price}$</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

import { Product } from "@/types";
import React from "react";
import ProductItem from "./ProductItem";

type PropTypes = {
  products: Product[];
};

const ProductList = ({ products }: PropTypes) => {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="grid grid-cols-1 justify-center items-center gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

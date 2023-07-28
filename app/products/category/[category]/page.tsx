import ProductList from "@/components/ProductList";
import { getCategoryProducts, getProducts } from "@/utils/products";
import React from "react";

type PropTypes = {
  params: any;
};

const CategoryProducts = async ({ params }: PropTypes) => {
  let products = [];
  
  if (params.category === "All") {
   
    products = await getProducts();
  } else {
    products = await getCategoryProducts(params.category);
    
  }
  return (
    <>
      {products && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <h1>No Products Found</h1>
      )}
    </>
  );
};

export default CategoryProducts;

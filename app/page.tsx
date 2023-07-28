import ProductList from "@/components/ProductList";
import { getProducts } from "@/utils/products";
import axios from "axios";



export default async function Home() {


  const products = await getProducts()




  return (
    < >
     
      <ProductList products={products} />
    </>
  );
}

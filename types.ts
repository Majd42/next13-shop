export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    
}


export type CartProduct = {
  
    product: Product,
    quantity: number
}
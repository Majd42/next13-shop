import axios from "@/axios"
import { Product } from "@/types"

export const getProducts = async (): Promise<Product[]> =>  {
    try {
        const response = await axios.get('/products')

    
        return response.data
    }catch(e) {
        throw new Error(
            "Something went wrong"
        )
    }
}


export const getProductById = async (id: number): Promise<Product> => {
    try {
        const response = await axios.get(`/products/${id}`)

        return response.data
    }catch(e) {
        throw new Error(
            "Somthing went wrong"
        )
    }
}


export const getCategoryProducts = async (category: string): Promise<Product[]> => {
    try{
        const response = await axios.get(`/products/category/${category}`)
        return response.data
    }
    catch(e) {
        throw new Error (
            "Somthing went wrong"
        )
    }
}
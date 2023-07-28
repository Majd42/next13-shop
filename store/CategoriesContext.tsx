'use client'

import axiosInstance from "@/axios";
import { createContext, useState, useEffect } from "react";

interface PropTypes {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean,
 
}

export const CategoriesContext = createContext<PropTypes>({
  categories: [],
  setCategories: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},
  loading: true
  
});

export const CategoriesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string> ('All');
  const [loading, setLoading] = useState(true)

  const getCategories = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.get("/products/categories");

      setCategories( ['All', ...response.data])
      setLoading(false)
    } catch (e) {
      setLoading(false)
      throw new Error("Somthing went wrong");
    }
  };

  useEffect(() => {
    async function fetchCategories() {
      await getCategories()
    }
    fetchCategories()
    
  },[])
 

  // useEffect(() => {
  //   console.log(categories)
  // },[categories])
  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        loading
        
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

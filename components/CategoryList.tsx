"use client";
import { CategoriesContext } from "@/store/CategoriesContext";
import React from "react";
import { useContext, useEffect } from "react";
import ReactLoading from "react-loading";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const { categories, setCategories, setSelectedCategory, loading } =
    useContext(CategoriesContext);

  return (
    <div className="flex justify-center flex flex-wrap p-4">
      {loading ? (
        <ReactLoading
          type={"balls"}
          color={"#fff"}
          height={20}
          width={20}
        />
      ) : (
        <>
        {categories.map(category => (
          <CategoryListItem key={category} category={category} />
        ))}
        </>
      )}
    </div>
  );
};

export default CategoryList;

import Link from "next/link";
import React from "react";

type PropTypes = {

  category: string;
};

const CategoryListItem = ({ category }: PropTypes) => {



  return (
    <Link href={`/products/category/${category}`}>
      <div className="bg-background-variant px-4 py-2 rounded-full  hover:text-secondary transition">
        {category}
      </div>
    </Link>
  );
};

export default CategoryListItem;
